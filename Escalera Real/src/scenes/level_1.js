var scoreText;
var scoreText2;
var scoreText3;
var turno;
export class Level1 extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Level1")
    }


    create() {

        //FONDO Y BOTONES

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'escalera_bg').setScale(1.1);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'level1_bg').setScale(1);
        this.add.image(950, 510, 'libro').setScale(0.8);

        let Libro = this.add.image(910, 625, 'escalera_btnsalir2', 0).setScale(0.8);
        Libro.setInteractive();
            
        Libro.on("pointerdown", (pointer, localX, localY) => {
            this.scene.start("MainMenu");}); 
        
        //PERSONAJES
        //this.add.image(this.cameras.main.centerX +150, this.cameras.main.centerY +10, 'mago').setScale(1);
        //this.add.image(this.cameras.main.centerX -205, this.cameras.main.centerY +87, 'prota').setScale(1);
        
        //PROTAGONISTA ANIMACIONES
        
        const protasAnimation = this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('protas', {start: 0, end: 3}),
            frameRate: 4
            })
        
        const protasAnimation2 = this.anims.create({
            key: 'caliz',
            frames: this.anims.generateFrameNumbers('protas', {start: 3, end: 9}),
            frameRate: 5
            })
        
        const protasAnimation3 = this.anims.create({
            key: 'pica',
            frames: this.anims.generateFrameNumbers('protas', {start: 10, end: 14}),
            frameRate: 7
            })

        const protasAnimation5 = this.anims.create({
            key: 'diamante',
            frames: this.anims.generateFrameNumbers('protas', {start: 10, end: 12}),
            frameRate: 5
            })
        
        const protasAnimation4 = this.anims.create({
            key: 'corazon',
            frames: this.anims.generateFrameNumbers('protas', {start: 15, end: 19}),
            frameRate: 4
            })
           
        const sprite = this.add.sprite(this.cameras.main.centerX -139,this.cameras.main.centerY +81, 'protas').setScale(1);

        sprite.play({ key: 'idle', repeat: -1 });

        //MAGO ANIMACIONES

        const MagoAnimation = this.anims.create({
            key: 'idle2',
            frames: this.anims.generateFrameNumbers('magos'),
            frameRate: 5
            })
           
            const sprite2 = this.add.sprite(this.cameras.main.centerX +150,this.cameras.main.centerY +10, 'magos').setScale(1);

        sprite2.play({ key: 'idle2', repeat: -1 });

    
        //BARRA VIDA
        this.add.image(this.cameras.main.centerX , this.cameras.main.centerY -265, 'barra_vida').setScale(0.9);
        
        //CARTAS NEGRAS 

        this.add.image(550, 625, 'carta_8p_Negro').setScale(0.5);
        this.add.image(200, 625, 'carta_3t_Negro').setScale(0.5);
        this.add.image(725, 625, 'carta_5d_Negro').setScale(0.5);
        this.add.image(375, 625, 'carta_9c_Negro').setScale(0.5);

        //VIDAS JUGADOR 1

        let BA1 = this.add.image(this.cameras.main.centerX -232, this.cameras.main.centerY -268, 'ba1').setScale(0.9);
        let BA2 = this.add.image(this.cameras.main.centerX -189, this.cameras.main.centerY -268, 'ba2').setScale(0.9);
        let BA3 = this.add.image(this.cameras.main.centerX -157, this.cameras.main.centerY -268, 'ba3').setScale(0.9);
        let BA4 = this.add.image(this.cameras.main.centerX -125, this.cameras.main.centerY -268, 'ba4').setScale(0.9);
        let BA5 = this.add.image(this.cameras.main.centerX -93, this.cameras.main.centerY -268, 'ba5').setScale(0.9);
        let BA6 = this.add.image(this.cameras.main.centerX -61, this.cameras.main.centerY -268, 'ba6').setScale(0.9);

        //VIDAS JUGADOR 2

        let BB1 = this.add.image(this.cameras.main.centerX +226, this.cameras.main.centerY -268, 'bb1').setScale(0.9);
        let BB2 = this.add.image(this.cameras.main.centerX +183, this.cameras.main.centerY -268, 'bb2').setScale(0.9);
        let BB3 = this.add.image(this.cameras.main.centerX +151, this.cameras.main.centerY -268, 'bb3').setScale(0.9);
        let BB4 = this.add.image(this.cameras.main.centerX +119, this.cameras.main.centerY -268, 'bb4').setScale(0.9);
        let BB5 = this.add.image(this.cameras.main.centerX +87, this.cameras.main.centerY -268, 'bb5').setScale(0.9);
        let BB6 = this.add.image(this.cameras.main.centerX +55, this.cameras.main.centerY -268, 'bb6').setScale(0.9);
        
        let vida1 = 6
        let vida2 = 6
        
        //CARTAS
        
        scoreText = this.add.text(30, -100, "score: 6", {
            fontSize: "32px",
            fill: "#000",
        })
        scoreText2 = this.add.text(500, -100, "score: 6", {
            fontSize: "32px",
            fill: "#000",
        })

        //TEXTO
        scoreText3 = this.add.text(498, 50 ,"0", {
            fontSize: "32px",
            fill: "#01E8FF",
        })

        turno = 0

        //TRES DE TREBOLES
        
        var TrebolTres = this.add.image(200, 625, 'carta_3t').setScale(0.6);
        TrebolTres.setInteractive(); 
        TrebolTres.on("pointerdown", (pointer, localX, localY) => {

            sprite.play({ key: 'caliz', repeat: 1 });

            PicaOcho.y=825 
            TrebolTres.y=825 
            CoraNueve.y=825 
            DiaCinco.y=825 
            setTimeout(function trebolTres(){   

        if (vida1 < 6) {
            vida1 = vida1 + 1;
            scoreText.setText("Score: " + vida1);
        }


        if (vida1 >= 6) {
            BA6.visible = true;
        }
        if (vida1 >= 5) {
            BA5.visible =true;
        }
        if (vida1 >= 4) {
            BA4.visible =true;
        }
        if (vida1 >= 3) {
            BA3.visible =true;
        }
        if (vida1 >= 2) {
            BA2.visible =true;
        }
        ;
        PicaOcho.y=625
        TrebolTres.y=625 
        CoraNueve.y=625 
        DiaCinco.y=625
        
        sprite.play({ key: 'idle', repeat: -1 });

        }
       ,1500); 
        })
        
        //NUEVE DE CORAZONES

        let CoraNueve = this.add.image(375, 625, 'carta_9c', 0).setScale(0.6);
        CoraNueve.setInteractive();
            
        CoraNueve.on("pointerdown", (pointer, localX, localY) => {

            sprite.play({ key: 'corazon', repeat: 1 });

            PicaOcho.y=825 
            TrebolTres.y=825 
            CoraNueve.y=825 
            DiaCinco.y=825
            setTimeout(function coranueve(){
                if (vida1 < 6) {
                    vida1 = vida1 + 2;
                    scoreText.setText("Score: " + vida1);
                }
        
        
                if (vida1 >= 6) {
                    BA6.visible = true;
                }
                if (vida1 >= 5) {
                    BA5.visible =true;
                }
                if (vida1 >= 4) {
                    BA4.visible =true;
                }
                if (vida1 >= 3) {
                    BA3.visible =true;
                }
                if (vida1 >= 2) {
                    BA2.visible =true;
                }


                ;
            PicaOcho.y=625
            TrebolTres.y=625  
            DiaCinco.y=625

            sprite.play({ key: 'idle', repeat: -1 });

        }
       ,1000); 
        })

        //OCHO DE PICAS

        let PicaOcho = this.add.image(550, 625, 'carta_8p', 0).setScale(0.6);
        PicaOcho.setInteractive();
            
        PicaOcho.on("pointerdown", (pointer, localX, localY) => {

            turno = turno +1
            scoreText3.setText(turno);

            PicaOcho.y=825 
            TrebolTres.y=825 
            CoraNueve.y=825 
            DiaCinco.y=825

            sprite.play({ key: 'pica', repeat: 1 });

            vida2 -= 2;
            if (vida2 < 1) {
                this.scene.start("Victoria");
               }
        
            vida1 -= 2;
    
            if (vida1 < 1) {
            
                this.scene.start("Derrota");
               }

            setTimeout(function ochopica(){
            
            
    
            scoreText.setText("Score: " + vida2);
    
    
            if (vida2 < 6) {
                BB6.visible =false;
            }
            if (vida2 < 5) {
                BB5.visible =false;
            }
            if (vida2 < 4) {
                BB4.visible =false;
            }
            if (vida2 < 3) {
                BB3.visible =false;
            }
            if (vida2 < 2) {
                BB2.visible =false;
            }
            if (vida2 < 1) {
                BB1.visible =false;   
            } 
        
            turno = turno +1
            scoreText3.setText(turno);

            setTimeout(function ochopica(){               
        
                scoreText2.setText("Score: " + vida1);
        
        
                if (vida1 < 6) {
                    BA6.visible =false;
                }
                if (vida1 < 5) {
                    BA5.visible =false;
                }
                if (vida1 < 4) {
                    BA4.visible =false;
                }
                if (vida1 < 3) {
                    BA3.visible =false;
                }
                if (vida1 < 2) {
                    BA2.visible =false;
                } 
                TrebolTres.y=625 
                CoraNueve.y=625 
                DiaCinco.y=625

                sprite.play({ key: 'idle', repeat: -1 });

                
                
                }
               ,750);
            }
           ,750);
            
           
        

        })

        //CINCO DE DIAMANTE

        let DiaCinco = this.add.image(725, 625, 'carta_5d', 0).setScale(0.6);
        DiaCinco.setInteractive();
            
        DiaCinco.on("pointerdown", (pointer, localX, localY) => {
            
            turno = turno +1
            scoreText3.setText(turno);
            
            PicaOcho.y=825 
            TrebolTres.y=825 
            CoraNueve.y=825 
            DiaCinco.y=825

            sprite.play({ key: 'diamante', repeat: 1 });

            vida2 -= 1;
            if (vida2 < 1) {
                this.scene.start("Victoria");
               }
        
            vida1 -= 2;
    
            if (vida1 < 1) {
            
                this.scene.start("Derrota");
               }


            setTimeout(function ochopica(){
            
            
            scoreText.setText("Score: " + vida2);
    
    
            if (vida2 < 6) {
                BB6.visible =false;
            }
            if (vida2 < 5) {
                BB5.visible =false;
            }
            if (vida2 < 4) {
                BB4.visible =false;
            }
            if (vida2 < 3) {
                BB3.visible =false;
            }
            if (vida2 < 2) {
                BB2.visible =false;
            }

            turno = turno +1
            scoreText3.setText(turno);
            
            setTimeout(function ochopica(){
                

                scoreText2.setText("Score: " + vida1);

                        
                if (vida1 < 6) {
                    BA6.visible =false;
                }
                if (vida1 < 5) {
                    BA5.visible =false;
                }
                if (vida1 < 4) {
                    BA4.visible =false;
                }
                if (vida1 < 3) {
                    BA3.visible =false;
                }
                if (vida1 < 2) {
                    BA2.visible =false;
                } 
                TrebolTres.y=625 
                CoraNueve.y=625 
                DiaCinco.y=625
                PicaOcho.y=625

                sprite.play({ key: 'idle', repeat: -1 });


                }
               ,1000);
            }
           ,1000);
           
        })
}}