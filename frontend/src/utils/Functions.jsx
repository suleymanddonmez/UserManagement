import { v4 as uuidv4, NIL as NIL_UUID, parse as uuidParse } from "uuid";

const Functions = {
  uuid: {
    new: function () {
      return uuidv4();
    },
    empty: NIL_UUID,
    parse: function (uuid) {
      if (uuid) {
        return uuidParse(uuid);
      }
    },
  },
};

export default Functions;
