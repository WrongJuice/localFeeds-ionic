import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

    @ViewChild('sliderView', {static: false}) sliderView: IonSlides;

    slider: any;

    constructor() {
        this.slider = {
            buttonDisabled: true,
            sliderItems: [
                {
                    id: 1,
                    img: 'salad.png',
                    title: 'Des produits locaux !',
                    desc: 'Trouver tous les produits que vous souhaitez et cuisiner de bons petits plats.'
                },
                {
                    id: 2,
                    img: 'food_pack.png',
                    title: 'Proche de chez vous !',
                    desc: 'Participer à l\'économie locale et renforcer vos liens avec producteurs locaux.'
                },
                {
                    id: 3,
                    img: 'fork_and_spoon.png',
                    title: 'Personnalisable !',
                    desc: 'Personnaliser vos préférences pour une expérience unique.'
                }
            ]
        }
    }

    ngOnInit() {

    }

    /**
     * Method which is used to check if this is the last of the slider
     * @param slider
     * @param sliderView
     */
    onSlideChange(slider: any, sliderView: IonSlides) {
        this.checkisEnd(slider, sliderView);
    }

    /**
     * Method which is used to disabled or enabled the button according to the current slide (enabled if last slide)
     * @param slider
     * @param sliderView
     */
    checkisEnd(slider: any, sliderView: IonSlides) {
        sliderView.isEnd().then((istrue) => {
            slider.buttonDisabled = !istrue;
        });
    }
}
