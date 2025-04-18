import React, { Component } from 'react'
import Imagen from './Imagen'
import Navegacion from './Navegacion'
import Footer from './Footer'
import '../css/index.css'
/*
import ogg from '../../media/audios/presentacion.ogg'
import mp3 from '../../media/audios/presentacion.mp3'
import wav from '../../media/audios/presentacion.wav'
import vtt from '../../media/track/transcripcion.vtt'
*/

export default class Presentacion extends Component {
  render() {
    return (
    <>
      <div className="index">
      <h1>Claudia Vitraux</h1>
      <Navegacion />
      <main>
        <section>
            <h2>Presentación</h2>
            <Imagen />
            <br />
            <audio controls>
              {/*
                <source src={ogg} type="audio/ogg" />
                <source src={mp3} type="audio/mpeg" />
                <source src={wav} type="audio/wav" />
                <track src={vtt} srclang="es" kind="captions" label="Transcripción" />
              */}
                <p>Tu navegador no soporta este audio.</p> 
            </audio>
        </section>
      </main>
      <Footer />
      </div>
    </>
    )
  }
}
