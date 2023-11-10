import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./style";
import { StyledText } from "../Text/style";

interface IInputProps {
  labelText?: string;
  placeHolder?: string;
  errors?: FieldError;
  type: undefined | "email" | "password" | "text" | "checkbox" | "radio";
  register?: UseFormRegisterReturn<string>;
  value?: string;
  defaultValue?: string;
}

export const Input = ({
  labelText,
  placeHolder,
  register,
  errors,
  type,
  value,
  defaultValue,
}: IInputProps) => {
  return (
    <StyledFieldset>
      <label htmlFor={register?.name} className={register?.name}>
        <StyledText text="two" tag="span" color="greyFour">
          {labelText}{" "}
        </StyledText>
      </label>{" "}
      <input
        type={type}
        id={register?.name}
        placeholder={placeHolder}
        {...register}
        value={value}
        defaultValue={defaultValue}
      />
      {errors ? (
        <StyledText text="two" tag="span" color="greyTwo">
          {errors.message}
        </StyledText>
      ) : null}
    </StyledFieldset>
  );
};
