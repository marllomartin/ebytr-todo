import React from "react";

import Header from "../Header";
import Filter from "../Filter";
import TaskList from "../TaskList"

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Filter />
      <TaskList />
    </Container>
  )
}
