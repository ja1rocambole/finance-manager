import React from "react";
import { StyledFormInsertTrasition } from "./style";
import { Input } from "../../fragments/Input";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../../fragments/Button/style";

const schemaFormInsertTrasition = z
  .object({
    description: z.string().nonempty("Campo obrigatorio").max(22),
    value: z.string().nonempty("Campo obrigatorio"),
    type: z.string().nonempty("Campo obrigatorio"),
  })
  .required();

export const FormInsertTrasition = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaFormInsertTrasition) });

  const submit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <StyledFormInsertTrasition>
      <form action="" onSubmit={handleSubmit(submit)}>
        <Input
          labelText="Descrição"
          placeHolder="Digitar descrição"
          type="text"
          register={register("description")}
          errors={errors?.description as FieldError}
        ></Input>
        <Input
          labelText="Valor"
          placeHolder="Digitar valor"
          type="number"
          register={register("value")}
          errors={errors?.value as FieldError}
        ></Input>

        <select {...register("type")}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>

        <StyledButton color="primary" type="submit">
          Inserir Valor
        </StyledButton>
      </form>
    </StyledFormInsertTrasition>
  );
};
