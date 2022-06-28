// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Derrota extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Derrota")
    }

    create() {
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'escalera_bg').setScale(1.1);
        this.add.image(this.cameras.main.centerX -200, this.cameras.main.centerY -200, 'escalera_derrota');
        this.add.image(this.cameras.main.centerX +176, this.cameras.main.centerY +9, 'mago');

        let Salir3 = this.add.image(this.cameras.main.centerX -200, this.cameras.main.centerY, 'escalera_btnsalir2', 0).setScale(0.8);
        Salir3.setInteractive();
        Salir3.on("pointerdown", (pointer, localX, localY) => {
            this.scene.start("MainMenu");});
            

        let Reiniciar = this.add.image(this.cameras.main.centerX -200, this.cameras.main.centerY + 100, 'escalera_btnreiniciar2', 0).setScale(0.8);
        Reiniciar.setInteractive();
        Reiniciar.on("pointerdown", (pointer, localX, localY) => {
            this.scene.start("Level1");});

    }}