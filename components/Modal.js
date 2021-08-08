import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'

export default function Modal({title, description, link, label, link2, label2, link3, label3, link4, label4, link5, label5, link6, label6, link7, label7, link8, label8, image2, image2Alt, image3, image3Alt, image4, image4Alt}) {
  let [isOpen, setIsOpen] = useState(false)

  
  function closeModal() {
    setIsOpen(false)
    document.getElementById('__next').style.filter = 'blur(0px)';
  }

  function openModal() {
    setIsOpen(true)
    document.getElementById('__next').style.filter = 'blur(5px)';
  }

  return (
      <div>
        <div>
          <button
              type="button"
              className="button"
              onClick={openModal}
              >
              {title} +
          </button>
        </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          onClose={closeModal}
          as="div"
          className="dialog-container"
          data-backdrop="static"
        >
          <Dialog.Overlay />
          <div className="dialog-content">
            <Dialog.Title ><h3 className="title">{title}</h3></Dialog.Title>
            <div className="inner">
              <p>{description}</p>
              <a href={link}><h4>{label}</h4></a>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'  }}>
                <img src={image2} alt={image2Alt} />
                <a href={link2}><h4>{label2}</h4></a>
                <img src={image3} alt={image3Alt} />
                <a href={link3}><h4>{label3}</h4></a>
                <img src={image4} alt={image4Alt} />
                <a href={link4}><h4>{label4}</h4></a>
              </div>
              <a href={link5}><h4>{label5}</h4></a>
              <a href={link6}><h4>{label6}</h4></a>
              <a href={link7}><h4>{label7}</h4></a>
              <a href={link8}><h4>{label8}</h4></a>
            </div>
          <button onClick={closeModal}>close</button>
          </div>
        </Dialog>
      </Transition>

          <style jsx>{`
            .button {
              z-index: 4;
              margin: 0 0 13px 13px;
              padding: 5px 10px 5px 10px;
              background-color: transparent;
              border: solid 1px #E9E6DD;
              border-radius: 25px;
              font-family: Inter;
              font-weight: 600;
              font-size: 15px;
              color: #E9E6DD;
            }

            .dialog-content {
              z-index: 5;
              text-align: justify;
              height: 60vh;
            }

            .inner {
              z-index: 5;
              text-align: justify;
              max-height: 38vh !important;
              overflow-y: auto !important;
              overflow-x: hidden !important;
              font-size: 15px;
              line-height: 25px;
              margin: 5px 0 5px 0;
            }
            
            img {
              max-height: 30vh;
            }

            .button:hover {
              background-color: #E9E6DD;
              color: #88533D;
              pointer: cursor;
            }

            .title {
              font-family: Fraunces;
            }
            @media (max-width: 767px) {
              .button {
                margin: 0 0 13px 0;
              }
            }
          `}</style>
      </div>
  )
}
