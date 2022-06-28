import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("MainMenu")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'escalera_bg').setScale(1.1);
        // Logo de Phaser
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/1.5, 'escalera_logo');

        // Boton para comenzar a jugar
        let Jugar = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*1.1, 'escalera_btnjugar', 0).setScale(1);
        Jugar.setInteractive();
        
        Jugar.on("pointerdown", (pointer, localX, localY) => {
			this.scene.start("LevelSelect");});  
    }
}