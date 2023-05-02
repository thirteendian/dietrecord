/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BodyRecord } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BodyRecordUpdateFormInputValues = {
    height?: number;
    weight?: number;
    birthday?: string;
};
export declare type BodyRecordUpdateFormValidationValues = {
    height?: ValidationFunction<number>;
    weight?: ValidationFunction<number>;
    birthday?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BodyRecordUpdateFormOverridesProps = {
    BodyRecordUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    birthday?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BodyRecordUpdateFormProps = React.PropsWithChildren<{
    overrides?: BodyRecordUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bodyRecord?: BodyRecord;
    onSubmit?: (fields: BodyRecordUpdateFormInputValues) => BodyRecordUpdateFormInputValues;
    onSuccess?: (fields: BodyRecordUpdateFormInputValues) => void;
    onError?: (fields: BodyRecordUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BodyRecordUpdateFormInputValues) => BodyRecordUpdateFormInputValues;
    onValidate?: BodyRecordUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BodyRecordUpdateForm(props: BodyRecordUpdateFormProps): React.ReactElement;
