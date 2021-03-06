import "@/components/list/List";
import "@/components/list/ListItem";
import { html } from "lit-element";

export const listTemplate = html`
  <h3>Default</h3>
  <md-list label="Transuranium elements">
    <md-list-item slot="list-item">Neptunium</md-list-item>
    <md-list-item slot="list-item">Plutonium</md-list-item>
    <md-list-item slot="list-item">Americium</md-list-item>
    <md-list-item slot="list-item">Curium</md-list-item>
    <md-list-item slot="list-item">Berkelium</md-list-item>
    <md-list-item slot="list-item">Californium</md-list-item>
  </md-list>

  <h3>Disabled</h3>
  <md-list label="Transuranium elements">
    <md-list-item slot="list-item">Neptunium</md-list-item>
    <md-list-item slot="list-item" disabled>Plutonium</md-list-item>
    <md-list-item slot="list-item">Americium</md-list-item>
    <md-list-item slot="list-item" disabled>Curium</md-list-item>
    <md-list-item slot="list-item">Berkelium</md-list-item>
    <md-list-item slot="list-item">Californium</md-list-item>
  </md-list>

  <h3>PreSelected</h3>
  <md-list label="Transuranium elements" activated="3">
    <md-list-item slot="list-item">Neptunium</md-list-item>
    <md-list-item slot="list-item">Plutonium</md-list-item>
    <md-list-item slot="list-item">Americium</md-list-item>
    <md-list-item slot="list-item">Curium</md-list-item>
    <md-list-item slot="list-item">Berkelium</md-list-item>
    <md-list-item slot="list-item">Californium</md-list-item>
  </md-list>

  <h3>Orientation</h3>
  <md-list label="Transuranium elements" alignment="horizontal">
    <md-list-item slot="list-item">Neptunium</md-list-item>
    <md-list-item slot="list-item">Plutonium</md-list-item>
    <md-list-item slot="list-item">Americium</md-list-item>
    <md-list-item slot="list-item">Curium</md-list-item>
    <md-list-item slot="list-item">Berkelium</md-list-item>
    <md-list-item slot="list-item">Californium</md-list-item>
  </md-list>
`;
