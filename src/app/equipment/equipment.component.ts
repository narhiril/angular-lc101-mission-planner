import { Component, OnInit } from '@angular/core';
import { EquipmentItem } from './equipment-item';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: EquipmentItem[] = [
       new EquipmentItem('Duct Tape', 0.5),
       new EquipmentItem('Space Camera', 20),
       new EquipmentItem('Food', 150),
       new EquipmentItem('Oxygen Tanks', 400),
       new EquipmentItem('AE-35 Unit', 5),
       new EquipmentItem('ISS Supplies', 800),
       new EquipmentItem('Water', 250),
       new EquipmentItem('Satellite', 1200),
       new EquipmentItem('R2 Unit', 32)
   ];
   cargoHold: EquipmentItem[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   isNearMaxMass: boolean = false;

   constructor() { }

   ngOnInit() { }

   addItem(item: EquipmentItem): boolean {
        this.cargoMass += item.mass;
        this.cargoHold.push(item);
        return (this.maximumAllowedMass - this.cargoMass <= 200);
   }

   canAdd(item: EquipmentItem): boolean {
        let hasTwoAlready: boolean = false;
        let count: number = 0;
        for (const cargo of this.cargoHold) { //bonus mission
            if (cargo.name == item.name) {
              count++;
            }
            if (count >= 2) {
              hasTwoAlready = true;
              break;
            }
        }
        return (
             this.cargoMass + item.mass <= this.maximumAllowedMass 
          && this.cargoHold.length !== this.maxItems
          && !hasTwoAlready
        );
   }

   emptyHold(): void {
        this.cargoHold = [];
        this.cargoMass = 0;
        this.isNearMaxMass = false;
   }
   
}
