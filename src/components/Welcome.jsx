import "react-bootstrap"; //QUESTO IMPORTA TUTTO, DOVREI PORTARE COMPONENTE PER COMPONENTE//
import Container from "react-bootstrap/Container";
import React from "react";

export default function Welcome() {
  return (
    <>
      <Container>
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Esercizi con React e Bootstrap</h1>
            <p class="col fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam culpa expedita neque quod perspiciatis
              commodi laudantium, labore incidunt, eum reiciendis assumenda est, nostrum qui suscipit cumque maxime
              dignissimos ea.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Click Me!
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
