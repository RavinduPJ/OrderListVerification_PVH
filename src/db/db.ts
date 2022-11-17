import Dexie, { Table } from 'dexie';
import { AOA2SheetOpts } from 'xlsx';

export interface BffOrderBook {
  id?: number;
  orderBookKey: string;
}

export interface BffOOR {
  id?: number;
  OORKey: string;
}

export interface BffOTR {
  id?: number;
  OTRKey: string;
}

export interface BffSA {
  id?: number;
  SAKey: string;
}

export interface BffOLR {
  id?: number;
  OLRKey: string;
}

// new update -start
export interface BuySheet {
  id?: number;
  BSKey: string;
}

export interface PVHSSFile {
  id?: number;
  PSSKey: string;
}

export interface APLOBFile {
  id?: number;
  AOBKey: string;
}

export interface AASheet {
  id?: number;
  AASKey: string;
}
// end

export class AppDB extends Dexie {
    bffOrderBook!: Table<BffOrderBook, number>;
    bffOOR!: Table<BffOOR, number>;
    bffOTR!: Table<BffOTR, number>;
    bffSA!: Table<BffSA, number>;
    bffOLR!: Table<BffOLR, number>;

    // new update -start

    BuySheet!: Table<BuySheet, number>;
    PVHSSFile!: Table<PVHSSFile, number>;
    APLOBFile!: Table<APLOBFile, number>;
    AASheet!: Table<AASheet, number>;

    // end

  constructor() {
    super('BrandixDB');
    this.version(3).stores({
      bffOrderBook: '++id, OBKey, OORKey, OTRKey, SAKey, OLRKey',
      bffOOR: '++id, OORKey',
      bffOTR: '++id, OTRKey',
      bffSA: '++id, SAKey',
      bffOLR: '++id, OLRKey',
      
      BuySheet: '++id, BSKey',
      PVHSSFile: '++id, PSSKey',
      APLOBFile: '++id, AOBKey',
      AASheet: '++id, AASKey',
    });
    this.on('populate', () => console.log("Starting the dexie database", new Date() ));
  }
}

export const db = new AppDB();
