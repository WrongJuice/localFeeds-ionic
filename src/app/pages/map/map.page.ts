import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

    constructor(private storage: Storage) {
    }

    ngOnInit() {
        this.storage.clear();
    }

}
