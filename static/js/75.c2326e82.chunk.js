(this.webpackJsonpzeroknowledge=this.webpackJsonpzeroknowledge||[]).push([[75],{791:function(I,n,_){!function(I){"use strict";I.defineMode("ntriples",(function(){var I={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function n(n,_){var e,R=n.location;e=R==I.PRE_SUBJECT&&"<"==_?I.WRITING_SUB_URI:R==I.PRE_SUBJECT&&"_"==_?I.WRITING_BNODE_URI:R==I.PRE_PRED&&"<"==_?I.WRITING_PRED_URI:R==I.PRE_OBJ&&"<"==_?I.WRITING_OBJ_URI:R==I.PRE_OBJ&&"_"==_?I.WRITING_OBJ_BNODE:R==I.PRE_OBJ&&'"'==_?I.WRITING_OBJ_LITERAL:R==I.WRITING_SUB_URI&&">"==_||R==I.WRITING_BNODE_URI&&" "==_?I.PRE_PRED:R==I.WRITING_PRED_URI&&">"==_?I.PRE_OBJ:R==I.WRITING_OBJ_URI&&">"==_||R==I.WRITING_OBJ_BNODE&&" "==_||R==I.WRITING_OBJ_LITERAL&&'"'==_||R==I.WRITING_LIT_LANG&&" "==_||R==I.WRITING_LIT_TYPE&&">"==_?I.POST_OBJ:R==I.WRITING_OBJ_LITERAL&&"@"==_?I.WRITING_LIT_LANG:R==I.WRITING_OBJ_LITERAL&&"^"==_?I.WRITING_LIT_TYPE:" "!=_||R!=I.PRE_SUBJECT&&R!=I.PRE_PRED&&R!=I.PRE_OBJ&&R!=I.POST_OBJ?R==I.POST_OBJ&&"."==_?I.PRE_SUBJECT:I.ERROR:R,n.location=e}return{startState:function(){return{location:I.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(I,_){var e=I.next();if("<"==e){n(_,e);var R="";return I.eatWhile((function(I){return"#"!=I&&">"!=I&&(R+=I,!0)})),_.uris.push(R),I.match("#",!1)||(I.next(),n(_,">")),"variable"}if("#"==e){var t="";return I.eatWhile((function(I){return">"!=I&&" "!=I&&(t+=I,!0)})),_.anchors.push(t),"variable-2"}if(">"==e)return n(_,">"),"variable";if("_"==e){n(_,e);var r="";return I.eatWhile((function(I){return" "!=I&&(r+=I,!0)})),_.bnodes.push(r),I.next(),n(_," "),"builtin"}if('"'==e)return n(_,e),I.eatWhile((function(I){return'"'!=I})),I.next(),"@"!=I.peek()&&"^"!=I.peek()&&n(_,'"'),"string";if("@"==e){n(_,"@");var i="";return I.eatWhile((function(I){return" "!=I&&(i+=I,!0)})),_.langs.push(i),I.next(),n(_," "),"string-2"}if("^"==e){I.next(),n(_,"^");var T="";return I.eatWhile((function(I){return">"!=I&&(T+=I,!0)})),_.types.push(T),I.next(),n(_,">"),"variable"}" "==e&&n(_,e),"."==e&&n(_,e)}}})),I.defineMIME("application/n-triples","ntriples"),I.defineMIME("application/n-quads","ntriples"),I.defineMIME("text/n-triples","ntriples")}(_(72))}}]);
//# sourceMappingURL=75.c2326e82.chunk.js.map