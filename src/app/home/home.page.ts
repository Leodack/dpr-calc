import { OptionsPopoverComponent } from './../popover/options-popover/options-popover.component';
import { Component, ViewChild } from '@angular/core';
import { PopoverController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private isChecked: boolean;

  public minAc: number;
  public maxAc: number;

  public results: number[];
  public acArray: number[];

  @ViewChild('content') content: IonContent;

  public attacks: {
    hit: number,
    damage: string,
    precisionDamage: string,
    critRange: number,
    critMul: number,
    critDamage: string,
    visible: boolean
  }[] = [];

  constructor(private popoverController: PopoverController) {
    this.isChecked = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark', this.isChecked);

    this.attacks = [{
      hit: null, damage: null, precisionDamage: null, critRange: null, critMul: null, critDamage: null, visible: true
    }];
  }

  public calculate(): void {
    const attacksFiltered = this.attacks.filter(v => v.hit && v.damage);
    if (attacksFiltered.length > 0) {
      const parsed = attacksFiltered.map(v => {
        return {
          hit: v.hit,
          damage: this.parse(v.damage),
          precisionDamage: this.parse(v.precisionDamage),
          critRange: v.critRange ? v.critRange : 20,
          critMul: v.critMul ? v.critMul : 2,
          critDamage: this.parse(v.critDamage)
        };
      });

      this.acArray = Array<number>(this.maxAc - this.minAc + 1).fill(this.minAc).map((v, i) => v += i);
      this.results = this.acArray.map(v => {
        console.log(parsed);
        return parsed.reduce((prev, curr) => {
          const hitChance = this.getHitChance(curr.hit, v);
          const critChance = this.getCritChance(curr.critRange);
          return hitChance * (curr.damage + curr.precisionDamage) +
            critChance * hitChance * (curr.damage + curr.critDamage) * (curr.critMul - 1) +
            prev;
        }, 0);
      }).map(v => +v.toFixed(4));
      this.content.scrollToTop(500);
    }
  }

  public add(): void {
    this.attacks.push({
      hit: null, damage: null, precisionDamage: null, critRange: null, critMul: null, critDamage: null, visible: true
    });
  }

  public remove(i: number): void {
    this.attacks.splice(i, 1);
  }

  public duplicate(i: number): void {
    this.attacks.push({ ...this.attacks[i] });
  }

  public toggleReveal(i: number): void {
    this.attacks[i].visible = !this.attacks[i].visible;
  }

  public async openPopover(e: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: OptionsPopoverComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      showBackdrop: false,
      event: e,
      componentProps: {
        isChecked: this.isChecked
      }
    });
    popover.onDidDismiss().then(() => {
      this.isChecked = document.body.classList.contains('dark');
    });
    return await popover.present();
  }

  private parse(damageString: string): number {
    if (!damageString) { return 0; }
    const s = damageString.replace(/ /g, '');
    const d = s.indexOf('d');
    const signPlus = s.indexOf('+');
    const signMinus = s.indexOf('-');
    const sign = signPlus === -1 ? signMinus : signPlus;
    const diceCount = d === 0 ? 1 : parseInt(s.substring(0, d), 10);
    const bonus = sign === -1 ? 0 : parseInt(s.substring(sign + 1), 10);
    const diceValue = sign === -1 ? parseInt(s.substring(d + 1), 10) : parseInt(s.substring(d + 1, sign), 10);
    const average = diceValue === 1 ? diceValue : (diceValue + 1) / 2;
    return diceCount * average + bonus;
  }

  private getHitChance(hit: number, ac: number): number {
    return Math.max(Math.min((21 - (ac - hit)) / 20, 0.95), 0.05);
  }

  private getCritChance(crit: number): number {
    return (21 - crit) / 20;
  }

}
