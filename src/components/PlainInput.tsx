import { Box, Text, Input } from "@chakra-ui/react";
import { FC, useState } from "react";
import { IInput } from "../typings/interface";

export const PlainInput: FC<IInput> = ({
  placeholder,
  id,
  background,
  border,
  required,
  type,
  name,
  disabled,
  value,
  values,
  onChange,
  onBlur,
  errorMessage,
  showMessage,
  color,
  width,
  borderRadius,
  hideCaret,
  _focus,
  _placeholder,
}: IInput) => {
  const [isActive, setIsActive] = useState(false);

  function handleTextChange(text: string): void {
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <>
      <Box
        position={"relative"}
        display="flex"
        flexDirection={"column"}
        id="custom-input-wrapper"
        outline="none"
        borderRadius={borderRadius ?? "8px"}
        w={width ?? "full"}
        background={background ?? ""}
        border={
          border ??
          (errorMessage ? "1px solid #EB001B !important" : "1px solid")
        }
        borderColor={""}
        overflow={"hidden"}
      >
        <Input
          sx={{ caretColor: `${hideCaret ? "transparent" : ""}` }}
          id={id}
          className={"input-reg-field input-field"}
          autoComplete="off"
          padding={placeholder ? "1.5rem 1rem" : "1.55rem 1rem"}
          background={"transparent"}
          required={required ?? false}
          type={type ?? "text"}
          name={name}
          // placeholder={placeholder}
          disabled={disabled ?? false}
          value={values ? values[name] : value}
          onChange={(e) => {
            onChange?.(e);
            handleTextChange(e.target.value);
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onBlur={(e: any) => onBlur?.(e)}
          border={0}
          _hover={{
            border: 0,
          }}
          _focus={{
            boxShadow: "none",
            border: errorMessage ? "0" : _focus ?? 0,
            borderRadius: borderRadius ?? "7px",
          }}
          _disabled={{ opacity: 0.9 }}
          fontSize={"16px"}
          color={color ?? ""}
          fontWeight="400"
        />
        <label
          id="input-label"
          htmlFor={type ?? "text"}
          className={isActive ? "Active" : ""}
          style={{
            transform: `${
              value ?? values?.[name] ? "translate(15px, 2px) scale(0.6)" : ""
            }`,
            zIndex: `${value ?? values?.[name] ? "2" : ""}`,
            color: `${_placeholder}`,
          }}
        >
          {placeholder}
        </label>
      </Box>
      <Box textAlign={"left"} padding="0.3rem 0">
        <Text color={""} fontSize={"12px"} fontWeight="500">
          {showMessage ? errorMessage : ""}
        </Text>
      </Box>
    </>
  );
};
