function series(prefixo, array)
{
    var seriesCompletas = []
 for ( var i = 0; i < array.length; i++){
     seriesCompletas.push(prefixo+" "+array[i])
}
return seriesCompletas

}
