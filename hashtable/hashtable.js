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
      this.handleOpenAddressing(key, value);
      this.numberOfItems++;
      this.growIfNeeded();
  }

  get (key) {
      const initialIndex = this.hash(key)
      let currentIndex = initialIndex;

      while (this.buckets[currentIndex]) {

          if (this.buckets[currentIndex].key === key) {
              return this.buckets[currentIndex].value;
          }

          currentIndex++;
          currentIndex %= this.buckets.length;
      }

      throw new Exception("Tried retrieving a value that does not exist in this hash table.");

  }

  findNextAvaliableSpot (index) {
      let newIndex = index;
      while (this.buckets[newIndex]) {
          newIndex++;
          newIndex %= this.buckets.length;
      }
      return newIndex;
  }

  handleOpenAddressing (key, value) {
      const index = this.hash(key);

      if (this.buckets[index]) {
          if (this.buckets[index].key === key) {
              this.buckets[index].value = value;
          } else {
              this.buckets[this.findNextAvaliableSpot(index)] = { key, value };
          }

      } else {
          this.buckets[index] = { key, value };
      }
  }

  growIfNeeded () {
      while (this.numberOfItems / this.buckets >= 0.7) {
          this.buckets.length += 1;
      }

      this.rehash();
  }

  rehash () {
      const temp = this.buckets;
      this.buckets = new Array(this.buckets.length);

      temp.forEach((element) => {
          this.handleOpenAddressing(element.key, element.value);
      });

      console.log("rehashing..")
  }

}
