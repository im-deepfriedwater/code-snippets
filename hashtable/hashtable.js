class HashTable {
  constructor() {
      const initialSize = 10;
      this.buckets = new Array(initialSize);
      this.numberOfItems = 0;
  }

  hash (key) {
      return key.length % this.buckets.length;
  }

  insert (key, value) {
      const index = this.hash(key);

      if (this.buckets[index]) {
          this.buckets[this.findNextAvaliableSpot()] = {value, key};
      } else {
          this.buckets[index] = {value, key};
      }

      this.numberOfItems++;
      this.growIfNeeded();
  }

  get (key) {
      const initialIndex = this.hash(key)
      let currentIndex = initialIndex;
      while (this.buckets[currentIndex].key !== key) { // TODO bug here

          currentIndex++;
          currentIndex %= this.buckets.length;

          if (currentIndex === initialIndex) {
              return undefined;
          }
      }

      return this.buckets[currentIndex].value;
  }

  findNextAvaliableSpot (index) {
      let newIndex = index;
      while (this.buckets[newIndex]) {
          newIndex++;
          newIndex %= this.buckets.length;
      }
      return newIndex;
  }

  growIfNeeded () {
      while (this.numberOfItems / this.buckets >= 0.7) {
          this.buckets.length += 1;
      }
  } // TODO rehash function necessary
}

const h = new HashTable();


h.insert("prize", "basketball");
h.insert("hired", "no...");

console.log(h.get("hired"))
