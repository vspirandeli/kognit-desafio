import React, { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { IoMdHelpCircle, IoIosCloseCircle } from "react-icons/io";

import Logo from '../..//assets/kognit-logo.png';

import './styles.css';

type ContentData = {
  id: 1,
  title: string;
  body: string;
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1'

export function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<ContentData[]>([]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleOpenModal() {
    setIsLoading(true);
    const response = await fetch(apiUrl);
    const data = await response.json();
    // setContent(data.slice(0, 4));
    setContent(data);

    setIsModalOpen(true);
    setIsLoading(false);
  }

  function clearContent() {
    setContent([]);
  }

  function handleRemoveContent(id: number) {
    setContent(content.filter(item => item.id !== id));
  }

  return (
    <>
      <header className="header-dashbard">
        <ul>
          <li>
            <div className="logo-container">
              <img
                alt="Kognit Logo"
                src={Logo}
                className="logo"
              />
            </div>
          </li>

          <li>
            <a className={"nav-link active"} href="/dashboard">Dashboard</a>
          </li>
          
          <li>
            <a className={"nav-link"} href="/">Login</a>
          </li>
        </ul>

        <div className="icon-container">
          <IoMdHelpCircle size={30} className="icon icon-disabled" />

          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            <FaBell size={28} className="icon icon-enabled" onClick={handleOpenModal} />
          )}
        </div>
      </header>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <div className="modal-header-container">
                <IoPencil size={24} style={{ marginRight: '1rem'}} />
                
                <h2>Editar Notificações</h2>
              </div>

              <button className="clear-button" disabled={content.length === 0} onClick={clearContent}>Limpar</button>
            </header>

            {content.length > 0 ? (
              <ul className="modal-content">
                {content.map(item => (
                  <li key={item.id}>
                    <div className="modal-content-container">
                      <p>{item.title}</p>

                      <span>{item.body}</span>
                    </div>

                    <IoIosCloseCircle size={26} className="modal-content-button" onClick={() => handleRemoveContent(item.id)} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty-content">
                <p>Nenhuma notificação disponível</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}