import _ from "lodash"

const parseNumber = (value: string) => {

  if(value.split("-")[1]){
    return +value.split("-")[1]
  }
  return +value.replace(/[^\d\.\-\ ]/g, '')
}
export default parseNumber