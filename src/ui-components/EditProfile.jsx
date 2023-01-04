/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const { pet, overrides, ...rest } = props;
  const [textFieldNameValue, setTextFieldNameValue] =
    useStateMutationAction("");
  const [textFieldAgeValue, setTextFieldAgeValue] = useStateMutationAction("");
  const [textFieldBreadValue, setTextFieldBreadValue] =
    useStateMutationAction("");
  const [textFieldAboutValue, setTextFieldAboutValue] =
    useStateMutationAction("");
  const [textFieldImageValue, setTextFieldImageValue] =
    useStateMutationAction("");
  const [textFieldColorValue, setTextFieldColorValue] =
    useStateMutationAction("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreUpdateAction({
    fields: {
      name: textFieldNameValue,
      age: textFieldAgeValue,
      breed: textFieldBreadValue,
      about: textFieldAboutValue,
      image: textFieldImageValue,
      color: textFieldColorValue,
    },
    id: pet?.id,
    model: Pet,
    schema: schema,
  });
  const buttonThreeSevenFiveNineTwoSevenZeroSevenOnClick =
    useDataStoreCreateAction({
      fields: {
        name: textFieldNameValue,
        age: textFieldAgeValue,
        breed: textFieldBreadValue,
        about: textFieldAboutValue,
        image: textFieldImageValue,
        color: textFieldColorValue,
      },
      model: Pet,
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditProfile")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Profile Pet"
            {...getOverrideProps(overrides, "Profile Pet")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://img.icons8.com/color/50/000000/ dog"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 12px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Name"
            placeholder="Kitty"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldNameValue}
            onChange={(event) => {
              setTextFieldNameValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldName")}
          ></TextField>
          <TextField
            label="Age"
            placeholder="2"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldAgeValue}
            onChange={(event) => {
              setTextFieldAgeValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldAge")}
          ></TextField>
          <TextField
            label="Breed"
            placeholder="labrador"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldBreadValue}
            onChange={(event) => {
              setTextFieldBreadValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldBread")}
          ></TextField>
          <TextField
            label="About"
            placeholder="Description"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldAboutValue}
            onChange={(event) => {
              setTextFieldAboutValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldAbout")}
          ></TextField>
          <TextField
            label="Color"
            placeholder="black"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldColorValue}
            onChange={(event) => {
              setTextFieldColorValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldColor")}
          ></TextField>
          <TextField
            label="Image"
            placeholder="Image-url"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldImageValue}
            onChange={(event) => {
              setTextFieldImageValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldImage")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "FrameButtons")}
        >
          <Button
            width="150px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Edit"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            width="150px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonThreeSevenFiveNineTwoSevenZeroSevenOnClick();
            }}
            {...getOverrideProps(overrides, "Button37592707")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
