// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Victoria extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Victoria")
    }

    create() {
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'escalera_bg').setScale(1.1);
        this.add.image(this.cameras.main.centerX -200, this.cameras.main.centerY -200, 'escalera_victoria');
        this.add.image(this.cameras.main.centerX + 176, this.cameras.main.centerY +9, 'prota');

        let Salir = this.add.image(this.cameras.main.centerX -200, this.cameras.main.centerY, 'escalera_btnsalir2', 0).setScale(0.8);
        Salir.setInteractive();
        Salir.on("pointerdown", (pointer, localX, localY) => {
            this.scene.start("MainMenu");});


    }}