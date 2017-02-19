import { Component, OnInit } from '@angular/core';
import { Mcipher } from './../mcipher.model'

@Component({
  selector: 'app-m-cipher',
  templateUrl: './m-cipher.component.html',
  styleUrls: ['./m-cipher.component.css', './m-cipher.component.scss']
})
export class MCipherComponent {

  mCiphers: Mcipher[] = [
    new Mcipher("a", "e", "Yellow", "key0", 1),
    new Mcipher("b", "e", "Yellow", "key1", 2),
    new Mcipher("c", "dSharp", "Orange-Yellow", "key8", 8),
    new Mcipher("d", "fSharp", "Green", "key4", 4),
    new Mcipher("e", "c", "Red", "key5", 5),
    new Mcipher("f", "c", "Red", "key16", 80),
    new Mcipher("g", "gSharp", "Blue", "key2", 3),
    new Mcipher("h", "c", "Red", "key4", 5),
    new Mcipher("i", "f", "Yellow-Green", "key9", 10),
    new Mcipher("j", "f", "Yellow-Green", "key9", 10),
    new Mcipher("k", "aSharp", "Violet", "key10", 20),
    new Mcipher("l", "fSharp", "Green", "key11", 30),
    new Mcipher("m", "gSharp", "Blue", "key12", 40),
    new Mcipher("n", "g", "Green-Blue", "key13", 50),
    new Mcipher("o", "a", "Blue-Violet", "key15", 70),
    new Mcipher("p", "c", "Red", "key16", 80),
    new Mcipher("q", "b", "Violet-red", "key18", 100),
    new Mcipher("r", "d", "Orange", "key19", 200),
    new Mcipher("s", "gSharp", "Blue", "key14", 60),
    new Mcipher("t", "a", "Blue-Violet", "key21", 400),
    new Mcipher("u", "cSharp", "Red-Orange", "key5", 6),
    new Mcipher("v", "cSharp", "Red-Orange", "key5", 6),
    new Mcipher("w", "cSharp", "Red-Orange", "key5", 6),
    new Mcipher("x", "aSharp", "Violet", "key17", 90),
    new Mcipher("y", "f", "Yellow-Green", "key9", 10),
    new Mcipher("z", "d", "Orange", "card7", 7)
  ];



  constructor() {
    var outputArray = []
    
    function musicEncryption() {
      var inputArray = this.downcase().split("")
      for (var i = 0; i <= inputArray.length -1; i++) {
        for (var x = 0; x <= Mcipher.length -1; x++) {
          if (Mcipher[x].alphabet == inputArray[i]) {
            outputArray.push(Mcipher[x])
          }
        }
      }
      return outputArray.join(" ");
    }
  }
};
