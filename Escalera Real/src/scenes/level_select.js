// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class LevelSelect extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("LevelSelect")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX+9, this.cameras.main.centerY, 'escalera_bg').setScale(1.1);


        // Boton para comenzar a jugar
        let Jugar2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*1.1, 'escalera_nivel1', 0).setScale(1);
        Jugar2.setInteractive();
        
        Jugar2.on("pointerdown", (pointer, localX, localY) => {
			this.scene.start("Level1");});


        let Salir2 = this.add.image(120, 40, 'escalera_btnsalir2', 0).setScale(1);
        Salir2.setInteractive();
            
        Salir2.on("pointerdown", (pointer, localX, localY) => {
            this.scene.start("MainMenu");}); 
            
    }
}