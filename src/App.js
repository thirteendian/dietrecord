import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
function App() {
    const signOut = async () => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };
  return (
      <View className="App">
        <Card>
          <Image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
  );
}

export default withAuthenticator(App);
