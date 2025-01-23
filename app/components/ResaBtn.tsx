"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { MdOutlineTableBar } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

const ResaBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="w-[180px] h-[45px] px-2 py-1 bg-rose rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2 inline-flex"
      >
        <MdOutlineTableBar className="w-8 h-8 px-0.5 justify-center items-center flex" />
        <div className="text-center text-beige text-2xl font-black font-titillium">
          RÉSERVER
        </div>
      </button>

      <Modal
        className="h-3/4 bg-rose"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <h2 className="text-2xl font-semibold font-titillium mb-4 border-b pb-2">
          Comment réserver une table ?
        </h2>
        <p className="mb-4 text-center pb-4 border-b border-white border-opacity-30">
          Nous prenons les réservations intégralement par téléphone. <br />
          Il vous suffit de nous appeler au moins 24h avant la date de
          réservation souhaitée, durant nos horaires d’ouverture
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
            <div className="w-[159px] h-[45px] px-3 py-1 bg-rose rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2 inline-flex overflow-hidden">
              <HiOutlinePhone className="w-8 h-8 p-[2.25px] justify-center items-center flex" />
              <div className="grow shrink basis-0 text-center text-white text-2xl font-semibold font-['Titillium Web']">
                Réserver
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ResaBtn;
