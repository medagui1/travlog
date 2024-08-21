import React from "react";
import { clients } from "../data/clients";

const Clients = () => {
  return (
    <section className="my-wide flex justify-center  flex-wrap gap-y-wide gap-x-normal ">
      {clients.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt={item.alt} width={item.width}/>
        </div>
      ))}
    </section>
  );
};

export default Clients;
