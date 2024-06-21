// Name: Fetch
// ID: fetch
// Description: Make requests to the broader internet.
// License: MIT AND MPL-2.0
// Souce code: extensions.turbowarp.org/fetch.js
// WARNING: This extension made for me and all default values be filled with link to my scripts

/* generated l10n code */Scratch.translate.setup({"de":{"_Fetch":"Internetquests"},"fi":{"_Fetch":"Datan haku"},"nb":{"_Fetch":"Hent"},"ru":{"_Fetch":"Поимка"},"zh-cn":{"_Fetch":"请求API"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  class Fetch {
    getInfo() {
      return {
        id: "fetch",
        name: Scratch.translate("Modified Fetch"),
        blocks: [
          {
            opcode: "fetch",
            blockType: Scratch.BlockType.REPORTER,
            text: "Fetch [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://raw.githubusercontent/p20k/pm/main/scripts/random.js",
              },
              {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
            text: "Get [URL]",
              },
            },
          },
        ],
      };
    }

    get(args) {
      return Scratch.fetch(args.URL)
        .then((r) => r.text())
        .catch(() => "");
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
