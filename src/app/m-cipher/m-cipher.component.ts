import { Component, OnInit } from '@angular/core';
import { Mcipher } from './../mcipher.model'

@Component({
  selector: 'app-m-cipher',
  templateUrl: './m-cipher.component.html',
  styleUrls: ['./m-cipher.component.css', './m-cipher.component.scss']
})
export class MCipherComponent {

  mCiphers: Mcipher[] = [
    new Mcipher("A", "e", "Yellow", "key0", 1),
    new Mcipher("B", "e", "Yellow", "key1", 2),
    new Mcipher("C", "dSharp", "Orange-Yellow", "key8", 8),
    new Mcipher("D", "fSharp", "Green", "key4", 4),
    new Mcipher("E", "c", "Red", "key5", 5),
    new Mcipher("F", "c", "Red", "key16", 80),
    new Mcipher("G", "gSharp", "Blue", "key2", 3),
    new Mcipher("H", "c", "Red", "key4", 5),
    new Mcipher("I", "f", "Yellow-Green", "key9", 10),
    new Mcipher("J", "f", "Yellow-Green", "key9", 10),
    new Mcipher("K", "aSharp", "Violet", "key10", 20),
    new Mcipher("L", "fSharp", "Green", "key11", 30),
    new Mcipher("M", "gSharp", "Blue", "key12", 40),
    new Mcipher("N", "g", "Green-Blue", "key13", 50),
    new Mcipher("O", "a", "Blue-Violet", "key15", 70),
    new Mcipher("P", "c", "Red", "key16", 80),
    new Mcipher("Q", "b", "Violet-red", "key18", 100),
    new Mcipher("R", "d", "Orange", "key19", 200),
    new Mcipher("S", "gSharp", "Blue", "key14", 60),
    new Mcipher("SH", "c", "Red", "key20", 300),
    new Mcipher("T", "a", "Blue-Violet", "key21", 400),
    new Mcipher("U", "cSharp", "Red-Orange", "key5", 6),
    new Mcipher("V", "cSharp", "Red-Orange", "key5", 6),
    new Mcipher("W", "cSharp", "Red-Orange", "key5", 6),
    new Mcipher("X", "aSharp", "Violet", "key17", 90),
    new Mcipher("Y", "f", "Yellow-Green", "key9", 10),
    new Mcipher("Z", "d", "Orange", "card7", 7)
  ];
}
