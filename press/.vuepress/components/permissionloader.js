module.exports = function (source) {
    try {
        let result = source.match(/\<template\>[\s\S]*\<\/template\>/gmi).map((it)=>{
            return it.replace(/(\{\{\$t\(.*\)\}\})/g,'<nb-close>$1</nb-close>');
        }).join('');
       return source.replace(/\<template\>([\s\S]*)\<\/template\>/gmi,result);
    } catch (error) {
        return source;
    }
}