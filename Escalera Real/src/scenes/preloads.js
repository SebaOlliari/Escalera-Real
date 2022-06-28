// Clase Preloads, para separar los preloads y tener mejor orden
export class Preloads extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    //SPRITE SHEET PROTA
    this.load.spritesheet('protas', "public/assets/images/prota_sprite.png", { frameWidth: 240, frameHeight: 150 })
    //SPRITE SHEET MAGO MALVADO 
    this.load.spritesheet('magos', "public/assets/images/mago_sprite.png", { frameWidth: 450, frameHeight: 450 })
    
    //MENU
    this.load.image("escalera_bg", "public/assets/images/escalera_bg.png");
    this.load.image("escalera_logo", "public/assets/images/escalera_logo.png");
    this.load.image("escalera_nivel1", "public/assets/images/escalera_nivel1.png");

    //BOTONES
    this.load.image("escalera_btncreditos", "public/assets/images/btn_creditos.png");
    this.load.image("escalera_btnextras", "public/assets/images/btn_extras.png");
    this.load.image("escalera_btnjugar", "public/assets/images/btn_jugar.png");
    this.load.image("escalera_btnreiniciar2", "public/assets/images/btn_reiniciar2.png");
    this.load.image("escalera_btnsalir", "public/assets/images/btn_salir.png");
    this.load.image("escalera_btnsalir2", "public/assets/images/btn_salir2.png");
    this.load.image("escalera_btnsiguiente2", "public/assets/images/btn_siguiente2.png");

    //VICTORIA Y DERROTA
    this.load.image("escalera_victoria", "public/assets/images/escalera_victoria.png");
    this.load.image("escalera_derrota", "public/assets/images/escalera_derrota.png");

    //HUD MENU
    this.load.image("level1_bg", "public/assets/images/level1_bg.png");
    this.load.image("libro", "public/assets/images/libro.png");
    this.load.image("btn_juego", "public/assets/images/btn_juego.png");

    //PERSONAJES
    this.load.image("prota", "public/assets/images/sprite_protaf.png");
    this.load.image("mago", "public/assets/images/sprite_mago.png");
    this.load.image("barra_vida", "public/assets/images/barra_vida.png");

    //CARTAS
    this.load.image("carta_3t", "public/assets/images/carta_3t.png");
    this.load.image("carta_5d", "public/assets/images/carta_5d.png");
    this.load.image("carta_9c", "public/assets/images/carta_9c.png");
    this.load.image("carta_8p", "public/assets/images/carta_8p.png");

    //CARTAS NEGRO
    this.load.image("carta_3t_Negro", "public/assets/images/carta_3t_Negro.png");
    this.load.image("carta_5d_Negro", "public/assets/images/carta_5d_Negro.png");
    this.load.image("carta_9c_Negro", "public/assets/images/carta_9c_Negro.png");
    this.load.image("carta_8p_Negro", "public/assets/images/carta_8p_Negro.png");

    //VIDA PERSONAJE 1
    this.load.image("ba1", "public/assets/images/ba1.png");
    this.load.image("ba2", "public/assets/images/ba2.png");
    this.load.image("ba3", "public/assets/images/ba3.png");
    this.load.image("ba4", "public/assets/images/ba4.png");
    this.load.image("ba5", "public/assets/images/ba5.png");
    this.load.image("ba6", "public/assets/images/ba6.png");

    //VIDA PERSONAJE 2
    this.load.image("bb1", "public/assets/images/bb1.png");
    this.load.image("bb2", "public/assets/images/bb2.png");
    this.load.image("bb3", "public/assets/images/bb3.png");
    this.load.image("bb4", "public/assets/images/bb4.png");
    this.load.image("bb5", "public/assets/images/bb5.png");
    this.load.image("bb6", "public/assets/images/bb6.png");
    
  }

  create() {

    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}