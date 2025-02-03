"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { MdOutlineTableBar } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import DefaultBtn from "./DefaultBtn";

const ResaBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <DefaultBtn
        onClickEvent={openModal}
        text="Reserver"
        icon={
          <MdOutlineTableBar className="w-8 h-8 px-0.5 flex justify-center items-center" />
        }
      />

      <Modal className="!bg-rose" isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-semibold font-titillium mb-4 border-b pb-2">
          Comment réserver une table ?
        </h2>
        <p className="mb-4 text-center pb-4 border-b border-white border-opacity-30">
          Nous prenons les réservations intégralement par téléphone. <br />
          Il vous suffit de nous appeler au moins 24h avant la date de
          réservation souhaitée, durant nos horaires d&apos;ouverture
        </p>
        <div>
          <h3 className="text-xl font-semibold">Horaires d&apos;ouverture:</h3>
          <ul className="mt-2">
            <li className="flex gap-2">
              <p className="font-semibold">Lundi:</p>
              <p>17h-2h</p>
            </li>
            <li className="flex gap-2">
              <p className="font-semibold">Mardi:</p>
              <p>17h-2h</p>
            </li>
            <li className="flex gap-2">
              <p className="font-semibold">Mercredi:</p>
              <p>17h-2h</p>
            </li>
            <li className="flex gap-2">
              <p className="font-semibold">Jeudi:</p>
              <p>17h-3h</p>
            </li>
            <li className="flex gap-2">
              <p className="font-semibold">Vendredi:</p>
              <p>17h-4h</p>
            </li>
            <li className="flex gap-2">
              <p className="font-semibold">Samedi:</p>
              <p>17h-4h</p>
            </li>
            <li className="flex gap-2">
              <p className="font-semibold">Dimanche:</p>
              <p>17h-4h</p>
            </li>
          </ul>
          <div className="w-full mt-4 flex justify-center">
            <DefaultBtn
              onClickEvent={() => window.open("tel:+33388326644")}
              text="Réserver"
              icon={
                <HiOutlinePhone className="w-8 h-8 p-[2.25px] flex justify-center items-center" />
              }
              className="w-[159px] overflow-hidden"
              textStyles="font-semibold"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ResaBtn;
