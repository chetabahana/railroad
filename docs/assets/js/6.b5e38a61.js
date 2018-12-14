(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{164:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/SAP/chevrotain/tree/master/examples/tutorial/step1_lexing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Run and Debug the source code"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("In This tutorial we will implement a Lexer for a simple SQL Select statement language:")]),t._v(" "),t._m(3),a("p",[t._v("A Lexer transforms a string input into a "),a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_1_1/interfaces/itoken.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token"),a("OutboundLink")],1),t._v(" vector.\nChevrotain has a built in Lexer engine based on Javascript Regular Expressions.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v('To use the Chevrotain lexer the Tokens must first be defined.\nLets examine the definition for a "FROM" Token:')]),t._v(" "),t._m(5),a("p",[t._v("There is nothing much to it. The pattern property is a RegExp which will be used when splitting up the input string\ninto separate Tokens.")]),t._v(" "),a("p",[t._v("We will use the "),a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_1_1/globals.html#createtoken",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("createToken")]),t._v(" API"),a("OutboundLink")],1),t._v("\nin the rest of tutorial because ES2015 has no support for static fields.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("How can we define Tokens for Identifiers or Integers?")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v('Lets examine all the needed Tokens definitions"')]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("We now have Token definitions, but how do we create a Lexer from these?")]),t._v(" "),t._m(14),a("p",[t._v("Note that:")]),t._v(" "),a("ul",[a("li",[t._m(15),t._v(" "),a("ul",[a("li",[t._v("See how to resolve "),a("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/keywords_vs_identifiers/keywords_vs_identifiers.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Keywords vs Identifiers"),a("OutboundLink")],1)])])]),t._v(" "),t._m(16)]),t._v(" "),t._m(17),t._v(" "),t._m(18),a("p",[t._v("The Lexing Result will contain:")]),t._v(" "),a("ol",[a("li",[t._v("A Token Vector.")]),t._v(" "),a("li",[t._v("the lexing errors (if any were encountered)")]),t._v(" "),a("li",[t._v("And other "),a("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/token_groups/token_groups.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token groups"),a("OutboundLink")],1),t._v(" (if grouping was used)")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"tutorial-lexer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-lexer","aria-hidden":"true"}},[this._v("#")]),this._v(" Tutorial - Lexer")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"tldr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tldr","aria-hidden":"true"}},[this._v("#")]),this._v(" TLDR")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" column1 "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table2\n"),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" persons "),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" age "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"our-first-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#our-first-token","aria-hidden":"true"}},[this._v("#")]),this._v(" Our First Token")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" createToken "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" chevrotain"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createToken\n"),a("span",{attrs:{class:"token comment"}},[t._v("// using createToken API")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" From "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"From"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/FROM/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"more-complex-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-complex-tokens","aria-hidden":"true"}},[this._v("#")]),this._v(" More complex Tokens")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Identifier "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Identifier"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/[a-zA-Z]\\w*/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Integer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Integer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/0|[1-9]\\d*/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"skipping-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skipping-tokens","aria-hidden":"true"}},[this._v("#")]),this._v(" Skipping Tokens")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The obvious use case in this language (and many others) is "),s("strong",[this._v("whitespace")]),this._v(". skipping certain Tokens is easily\naccomplished by marking them with the SKIP group.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" WhiteSpace "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"WhiteSpace"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\s+/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    group"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chevrotain"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lexer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SKIPPED")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"all-our-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-our-tokens","aria-hidden":"true"}},[this._v("#")]),this._v(" All Our Tokens")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Identifier "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Identifier"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/[a-zA-Z]\\w*/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// We specify the "longer_alt" property to resolve keywords vs identifiers ambiguity.')]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// See: https://github.com/SAP/chevrotain/blob/master/examples/lexer/keywords_vs_identifiers/keywords_vs_identifiers.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Select "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Select"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/SELECT/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    longer_alt"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Identifier\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" From "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"From"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/FROM/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    longer_alt"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Identifier\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Where "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Where"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/WHERE/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    longer_alt"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Identifier\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Comma "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Comma"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/,/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Integer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Integer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/0|[1-9]\\d*/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" GreaterThan "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"GreaterThan"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/>/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" LessThan "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"LessThan"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/</")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" WhiteSpace "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"WhiteSpace"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\s+/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    group"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chevrotain"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lexer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SKIPPED")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"creating-the-lexer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-lexer","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating The Lexer")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// note we are placing WhiteSpace first as it is very common thus it will speed up the lexer.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" allTokens "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    WhiteSpace"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v('// "keywords" appear before the Identifier')]),t._v("\n    Select"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    From"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Where"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Comma"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// The Identifier must appear after the keywords because all keywords are valid identifiers.")]),t._v("\n    Identifier"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Integer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GreaterThan"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    LessThan\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" SelectLexer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Lexer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allTokens"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("strong",[this._v("order")]),this._v(" of Token definitions passed to the Lexer is "),s("strong",[this._v("important")]),this._v(".\nThe first PATTERN to match will be chosen not the longest.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("The Chevrotain Lexer is "),s("strong",[this._v("stateless")]),this._v(", thus only a "),s("strong",[this._v("single one per grammar")]),this._v(" should ever be created.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-the-lexer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-lexer","aria-hidden":"true"}},[this._v("#")]),this._v(" Using The Lexer")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inputText "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"SELECT column1 FROM table2"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lexingResult "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SelectLexer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tokenize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputText"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="step1_lexing.md";s.default=e.exports}}]);