import React from "react";

import Header from "../Header";
import TaskList from "../TaskList"

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <TaskList />
    </Container>
  )
}
