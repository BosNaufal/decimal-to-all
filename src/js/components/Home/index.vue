
<template>
  <div>
    <div class="container">
      <h1 class="text-center">Decimal To All</h1>
      <div class="center-block">
        <input type="text" class="TextInput center-block" name="name" placeholder="Enter Your Number Here..." v-model="input">
      </div>
      <div class="center-block text-center">
        <button type="button" name="button" class="btn btn-success" @click="doConvert">Convert</button>
        <button type="button" name="button" class="btn btn-primary" @click="clear">Clear</button>
      </div>

      <div class="row">

        <div class="col-md-4 text-center Cara-container" v-if="binary.length">
          <h3>Binary</h3>
          <div class="Cara">
            <div>{{ input }}</div>
            <div class="Cara-item" v-for="b in binary">
              <span>2:———––––––––––––––– {{ b.rest }}</span>
              <div>{{ b.current }}</div>
            </div>
            <br/>
            <h4>Result Is: <span class="text-primary">{{ convertToTextBinary(binary) }}</span></h4>
          </div>
        </div>

        <div class="col-md-4 text-center Cara-container" v-if="octal.length">
          <h3>Octal</h3>
          <div class="Cara">
            <div>{{ input }}</div>
            <div class="Cara-item" v-for="o in octal">
              <span>8:———––––––––––––––– {{ o.rest }}</span>
              <div>{{ o.current }}</div>
            </div>
            <br/>
            <h4>Result Is: <span class="text-primary">{{ convertToText(octal) }}</span></h4>
          </div>
        </div>

        <div class="col-md-4 text-center Cara-container" v-if="hexa.length">
          <h3>Hexa</h3>
          <div class="Cara">
            <div>{{ input }}</div>
            <div class="Cara-item" v-for="h in hexa">
              <span>16:———––––––––––––––– {{ h.rest }}</span>
              <div>{{ h.current }}</div>
            </div>
            <br/>
            <h4>Result Is: <span class="text-primary">{{ convertToText(hexa) }}</span></h4>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        input: null,
        binary: [],
        hexa: [],
        octal: [],
        lastResult: []
      }
    },

    methods: {

      isItHexa(num, hexa) {
        let decimal = [10,11,12,13,14,15]
        let hexaAlpha = ["A", "B", "C", "D", "E", "F"]
        let index = decimal.indexOf(num)
        let foundInDecimalList = index !== -1
        if(foundInDecimalList) return hexaAlpha[index]
        return num
      },

      convert(num, convertNum, hexa) {
        let rest = num % convertNum
        let result = num / convertNum

        let current = Math.ceil(result)
        let hasComma = result.toString().indexOf('.') !== -1
        if(hasComma) current -= 1

        if(result <= 0) return false

        else {
          console.log(convertNum + '———–––––––––––––––' + this.isItHexa(rest, hexa));
          console.log('      ' + current);

          this.lastResult.push({ current, rest: this.isItHexa(rest) });
          return this.convert(current,convertNum,hexa)
        }
      },

      doConvert() {
        // Octal
        this.lastResult = []
        this.convert(171,8, false, "octal");
        this.octal = this.lastResult

        // Binary
        this.lastResult = []
        this.convert(171,2, false, "binary");
        this.binary = this.lastResult

        // Hexa
        this.lastResult = []
        this.convert(171,16, true, "hexa");
        this.hexa = this.lastResult

      },

      clear() {
        this.input = null
        this.binary = []
        this.hexa = []
        this.octal = []
        this.lastResult = []
      },

      convertToText(arg) {
        let flatten = []
        arg.forEach((item) => {
          flatten.push(item.rest)
        })
        return flatten.reverse().join('')
      },

      convertToTextBinary(arg) {
        let text = this.convertToText(arg)

        // Make a Regex
        var re = /\d{1,4}/g; // grouping each 3 digit
        var target = text;
        var matchy;

        // make an array for matchy string
        var arr = [];
        while((matchy = re.exec(target)) !== null){
          arr.push(matchy[0].length);
        }

        // Convert String to Array
        var string = target.split('');

        // Add a comma every three digit from back
        arr.splice(arr.length-1); // remove buggy first comma
        for (var i = 0; i < arr.length; i++) {
          var time = arr[i];
          var position = i*(time+1);
          string.splice(string.length-position-time,0,' ');
        }

        // join Array
        return string.join('');

      }

    },

  };

</script>

<style lang="sass">

  .btn {
    width: 25%;
    padding: 10px;
  }

  .TextInput {
    text-align: center;
    margin-top: 25px;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
  }

  h1 {
    margin-top: 45px;
  }

  .Cara {
    margin-top: 15px;
    padding: 15px;

    &-container {
      margin-top: 35px;
      border: 1px solid #DDD;
    }
  }

</style>
