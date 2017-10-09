import { Component, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'product-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent {
    @Input() product;
    public slideIndex = 1;

    @Input() showModal: boolean;

    @Output() showModalChange:EventEmitter<boolean> = new EventEmitter<boolean>();

    public images = [];

    public myModal: any;

    constructor() { }

    ngOnInit() {
        this.images = this.product.children_image.split(',').map((item) => item.trim());
    }

    ngOnChanges() {
        if(this.showModal) {
            this.myModal.show();
            this.currentSlide(1);
        }
    }
    ngAfterViewInit() {
        this.myModal = $('#myModal'+ this.product.id);
    }
    closeModal() {
        this.myModal.hide();
        this.showModalChange.emit(false);
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        let i;
        let slides = this.myModal.find('.mySlides');
        let dots = this.myModal.find('.demo');
        if (n > slides.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            (<any>slides[i]).style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        (<any>slides[this.slideIndex - 1]).style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    }

}
