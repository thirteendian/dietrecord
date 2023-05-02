import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import React, { useState, useEffect } from "react";
import { API, Storage} from "aws-amplify";
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";

import { listNotes } from "./graphql/queries";
import {
    createNote as createNoteMutation,
    deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

import { listBodyRecords } from "./graphql/queries";
import {
    createBodyRecord as createBodyRecordMutation,
    updateBodyRecord as updateBodyRecordMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
    const [notes, setNotes] = useState([]);
    const [bodyRecords, setBodyRecords] = useState([]);

    useEffect(() => {
        fetchNotes();
        fetchBodyRecords();
    }, []);

    async function createBodyRecord(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            height: parseFloat(form.get("height")),
            weight: parseFloat(form.get("weight")),
            birthday: form.get("birthday"),
        };
        await API.graphql({
            query: createBodyRecordMutation,
            variables: { input: data },
        });
        fetchBodyRecords();
        event.target.reset();
    }

    async function updateBodyRecord(id, newRecord) {
        await API.graphql({
            query: updateBodyRecordMutation,
            variables: { input: { id, ...newRecord } },
        });
        fetchBodyRecords();
    }

    async function fetchBodyRecords() {
        const apiData = await API.graphql({ query: listBodyRecords });
        const bodyRecordsFromAPI = apiData.data.listBodyRecords.items;
        setBodyRecords(bodyRecordsFromAPI);
    }
    async function fetchNotes() {
        const apiData = await API.graphql({ query: listNotes });
        const notesFromAPI = apiData.data.listNotes.items;
        await Promise.all(
            notesFromAPI.map(async (note) => {
                if (note.image) {
                    const url = await Storage.get(note.name);
                    note.image = url;
                }
                return note;
            })
        );
        setNotes(notesFromAPI);
    }

    async function createNote(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const image = form.get("image");
        const data = {
            name: form.get("name"),
            description: form.get("description"),
            image: image.name,
        };
        if (!!data.image) await Storage.put(data.name, image);
        await API.graphql({
            query: createNoteMutation,
            variables: { input: data },
        });
        fetchNotes();
        event.target.reset();
    }

    async function deleteNote({ id,name }) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        await Storage.remove(name);
        await API.graphql({
            query: deleteNoteMutation,
            variables: { input: { id } },
        });
    }

    return (
<>
    <View as="form" margin="3rem 0" onSubmit={createBodyRecord}>
        <Flex direction="row" justifyContent="center">
            <TextField
                name="height"
                placeholder="Height (cm)"
                label="Height"
                labelHidden
                type="number"
                step="0.01"
                required
            />
            <TextField
                name="weight"
                placeholder="Weight (kg)"
                label="Weight"
                labelHidden
                type="number"
                step="0.01"
                required
            />
            <TextField
                name="birthday"
                placeholder="Birthday"
                label="Birthday"
                labelHidden
                type="date"
                required
            />
            <Button type="submit" variation="primary">
                Save Body Record
            </Button>
        </Flex>
    </View>
    <Heading level={2}>Body Records</Heading>
    <View margin="3rem 0">
        {bodyRecords.map((record) => (
            <Flex
                key={record.id}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text as="strong" fontWeight={700}>
                    Height: {record.height} cm, Weight:{record.weight} kg
                </Text>
                <Text as="span">Birthday: {record.birthday}</Text>
                <Button
                    variation="link"
                    onClick={() =>
                        updateBodyRecord(record.id, {
                            height: prompt("New height (cm):"),
                            weight: prompt("New weight (kg):"),
                        })
                    }
                >
                    Edit Body Record
                </Button>
            </Flex>
        ))}
    </View>

    <View className="App">
        <Heading level={1}>My Notes</Heading>
        <View as="form" margin="3rem 0" onSubmit={createNote}>
            <Flex direction="row" justifyContent="center">
                <TextField
                    name="name"
                    placeholder="Note Name"
                    label="Note Name"
                    labelHidden
                    variation="quiet"
                    required
                />
                <TextField
                    name="description"
                    placeholder="Note Description"
                    label="Note Description"
                    labelHidden
                    variation="quiet"
                    required
                />
                <View
                    name="image"
                    as="input"
                    type="file"
                    style={{ alignSelf: "end" }}
                />
                <Button type="submit" variation="primary">
                    Create Note
                </Button>
            </Flex>
        </View>
        <Heading level={2}>Current Notes</Heading>
        <View margin="3rem 0">
            {notes.map((note) => (
                <Flex
                    key={note.id || note.name}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text as="strong" fontWeight={700}>
                        {note.name}
                    </Text>
                    <Text as="span">{note.description}</Text>
                    {note.image && (
                        <Image
                            src={note.image}
                            alt={`visual aid for ${notes.name}`}
                            style={{ width: 400 }}
                        />
                    )}
                    <Button variation="link" onClick={() => deleteNote(note)}>
                        Delete note
                    </Button>
                </Flex>
            ))}
        </View>
        <Button onClick={signOut}>Sign Out</Button>
    </View>
</>

    );
};

export default withAuthenticator(App);