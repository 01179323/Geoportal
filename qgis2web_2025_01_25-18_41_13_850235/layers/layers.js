var wms_layers = [];

var lyr_Ortofotomapaaktualna_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofotomapa aktualna',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotomapaaktualna_0, 0]);
var format_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1 = new ol.format.GeoJSON();
var features_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1 = format_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1.readFeatures(json_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1.addFeatures(features_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1);
var lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1, 
                style: style_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1,
                popuplayertitle: 'Różnice pomiędzy procentowymi udziałami przebiegów rzek z 1990 i 2004 roku',
                interactive: true,
    title: 'Różnice pomiędzy procentowymi udziałami przebiegów rzek z 1990 i 2004 roku<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1_3.png" /> 0% - 20%<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1_5.png" /> 60% - 100%<br />'
        });
var format_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2 = new ol.format.GeoJSON();
var features_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2 = format_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2.readFeatures(json_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2.addFeatures(features_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2);
var lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2, 
                style: style_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2,
                popuplayertitle: 'Różnice pomiędzy procentowymi udziałami przebiegów rzek z 1940 i 1990 roku',
                interactive: true,
    title: 'Różnice pomiędzy procentowymi udziałami przebiegów rzek z 1940 i 1990 roku<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2_0.png" /> -100 - -60<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2_1.png" /> -60 - -20<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2_2.png" /> -20 - 0<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2_3.png" /> 0 - 20<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2_4.png" /> 20 - 60<br />\
    <img src="styles/legend/Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2_5.png" /> 60 - 100<br />'
        });
var format_Obszargdziezawszepynarzeka_3 = new ol.format.GeoJSON();
var features_Obszargdziezawszepynarzeka_3 = format_Obszargdziezawszepynarzeka_3.readFeatures(json_Obszargdziezawszepynarzeka_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszargdziezawszepynarzeka_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszargdziezawszepynarzeka_3.addFeatures(features_Obszargdziezawszepynarzeka_3);
var lyr_Obszargdziezawszepynarzeka_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszargdziezawszepynarzeka_3, 
                style: style_Obszargdziezawszepynarzeka_3,
                popuplayertitle: 'Obszar, gdzie zawsze płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Obszargdziezawszepynarzeka_3.png" /> Obszar, gdzie zawsze płynęła rzeka'
            });
var format_Obszargdziekiedykolwiekpynarzeka_4 = new ol.format.GeoJSON();
var features_Obszargdziekiedykolwiekpynarzeka_4 = format_Obszargdziekiedykolwiekpynarzeka_4.readFeatures(json_Obszargdziekiedykolwiekpynarzeka_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszargdziekiedykolwiekpynarzeka_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszargdziekiedykolwiekpynarzeka_4.addFeatures(features_Obszargdziekiedykolwiekpynarzeka_4);
var lyr_Obszargdziekiedykolwiekpynarzeka_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszargdziekiedykolwiekpynarzeka_4, 
                style: style_Obszargdziekiedykolwiekpynarzeka_4,
                popuplayertitle: 'Obszar, gdzie kiedykolwiek płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Obszargdziekiedykolwiekpynarzeka_4.png" /> Obszar, gdzie kiedykolwiek płynęła rzeka'
            });
var format_Przebiegrzekiw1940rokuMapahistoryczna_5 = new ol.format.GeoJSON();
var features_Przebiegrzekiw1940rokuMapahistoryczna_5 = format_Przebiegrzekiw1940rokuMapahistoryczna_5.readFeatures(json_Przebiegrzekiw1940rokuMapahistoryczna_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Przebiegrzekiw1940rokuMapahistoryczna_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Przebiegrzekiw1940rokuMapahistoryczna_5.addFeatures(features_Przebiegrzekiw1940rokuMapahistoryczna_5);
var lyr_Przebiegrzekiw1940rokuMapahistoryczna_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Przebiegrzekiw1940rokuMapahistoryczna_5, 
                style: style_Przebiegrzekiw1940rokuMapahistoryczna_5,
                popuplayertitle: 'Przebieg rzeki w 1940 roku (Mapa historyczna)',
                interactive: true,
                title: '<img src="styles/legend/Przebiegrzekiw1940rokuMapahistoryczna_5.png" /> Przebieg rzeki w 1940 roku (Mapa historyczna)'
            });
var format_Przebiegrzekiw1990rokuVMap_6 = new ol.format.GeoJSON();
var features_Przebiegrzekiw1990rokuVMap_6 = format_Przebiegrzekiw1990rokuVMap_6.readFeatures(json_Przebiegrzekiw1990rokuVMap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Przebiegrzekiw1990rokuVMap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Przebiegrzekiw1990rokuVMap_6.addFeatures(features_Przebiegrzekiw1990rokuVMap_6);
var lyr_Przebiegrzekiw1990rokuVMap_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Przebiegrzekiw1990rokuVMap_6, 
                style: style_Przebiegrzekiw1990rokuVMap_6,
                popuplayertitle: 'Przebieg rzeki w 1990 roku (VMap)',
                interactive: true,
                title: '<img src="styles/legend/Przebiegrzekiw1990rokuVMap_6.png" /> Przebieg rzeki w 1990 roku (VMap)'
            });
var format_Przebiegrzekiw2024rokuSenitenl2_7 = new ol.format.GeoJSON();
var features_Przebiegrzekiw2024rokuSenitenl2_7 = format_Przebiegrzekiw2024rokuSenitenl2_7.readFeatures(json_Przebiegrzekiw2024rokuSenitenl2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Przebiegrzekiw2024rokuSenitenl2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Przebiegrzekiw2024rokuSenitenl2_7.addFeatures(features_Przebiegrzekiw2024rokuSenitenl2_7);
var lyr_Przebiegrzekiw2024rokuSenitenl2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Przebiegrzekiw2024rokuSenitenl2_7, 
                style: style_Przebiegrzekiw2024rokuSenitenl2_7,
                popuplayertitle: 'Przebieg rzeki w 2024 roku (Senitenl-2)',
                interactive: true,
                title: '<img src="styles/legend/Przebiegrzekiw2024rokuSenitenl2_7.png" /> Przebieg rzeki w 2024 roku (Senitenl-2)'
            });

lyr_Ortofotomapaaktualna_0.setVisible(true);lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1.setVisible(false);lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2.setVisible(false);lyr_Obszargdziezawszepynarzeka_3.setVisible(false);lyr_Obszargdziekiedykolwiekpynarzeka_4.setVisible(false);lyr_Przebiegrzekiw1940rokuMapahistoryczna_5.setVisible(false);lyr_Przebiegrzekiw1990rokuVMap_6.setVisible(false);lyr_Przebiegrzekiw2024rokuSenitenl2_7.setVisible(true);
var layersList = [lyr_Ortofotomapaaktualna_0,lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1,lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2,lyr_Obszargdziezawszepynarzeka_3,lyr_Obszargdziekiedykolwiekpynarzeka_4,lyr_Przebiegrzekiw1940rokuMapahistoryczna_5,lyr_Przebiegrzekiw1990rokuVMap_6,lyr_Przebiegrzekiw2024rokuSenitenl2_7];
lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'VMap_PERCE': 'VMap_PERCE', 'Sentinel_P': 'Sentinel_P', 'historyczn': 'historyczn', 'historyc_1': 'historyc_1', 'historyc_2': 'historyc_2', 'VMap_Senti': 'VMap_Senti', 'historyc_3': 'historyc_3', 'historyc_4': 'historyc_4', 'VMap_Sen_1': 'VMap_Sen_1', });
lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'VMap_PERCE': 'VMap_PERCE', 'Sentinel_P': 'Sentinel_P', 'historyczn': 'historyczn', 'historyc_1': 'historyc_1', 'historyc_2': 'historyc_2', 'VMap_Senti': 'VMap_Senti', 'historyc_3': 'historyc_3', 'historyc_4': 'historyc_4', 'VMap_Sen_1': 'VMap_Sen_1', });
lyr_Obszargdziezawszepynarzeka_3.set('fieldAliases', {'FID_bug_se': 'FID_bug_se', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_merge_': 'FID_merge_', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Obszargdziekiedykolwiekpynarzeka_4.set('fieldAliases', {'FID_merge_': 'FID_merge_', 'Shape_Leng': 'Shape_Leng', 'Perimeter': 'Perimeter', 'FID_bug_se': 'FID_bug_se', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'Perimeter_': 'Perimeter_', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Przebiegrzekiw1940rokuMapahistoryczna_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Perimeter': 'Perimeter', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Przebiegrzekiw1990rokuVMap_6.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Perimeter': 'Perimeter', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Przebiegrzekiw2024rokuSenitenl2_7.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1.set('fieldImages', {'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'VMap_PERCE': 'TextEdit', 'Sentinel_P': 'TextEdit', 'historyczn': 'TextEdit', 'historyc_1': 'TextEdit', 'historyc_2': 'TextEdit', 'VMap_Senti': 'TextEdit', 'historyc_3': 'TextEdit', 'historyc_4': 'TextEdit', 'VMap_Sen_1': 'TextEdit', });
lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2.set('fieldImages', {'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'VMap_PERCE': 'TextEdit', 'Sentinel_P': 'TextEdit', 'historyczn': 'TextEdit', 'historyc_1': 'TextEdit', 'historyc_2': 'TextEdit', 'VMap_Senti': 'TextEdit', 'historyc_3': 'TextEdit', 'historyc_4': 'TextEdit', 'VMap_Sen_1': 'TextEdit', });
lyr_Obszargdziezawszepynarzeka_3.set('fieldImages', {'FID_bug_se': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_merge_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Obszargdziekiedykolwiekpynarzeka_4.set('fieldImages', {'FID_merge_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Perimeter': 'TextEdit', 'FID_bug_se': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'Perimeter_': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Przebiegrzekiw1940rokuMapahistoryczna_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Perimeter': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Przebiegrzekiw1990rokuVMap_6.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Perimeter': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Przebiegrzekiw2024rokuSenitenl2_7.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1990i2004roku_1.set('fieldLabels', {'GRID_ID': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'VMap_PERCE': 'inline label - always visible', 'Sentinel_P': 'inline label - always visible', 'historyczn': 'inline label - always visible', 'historyc_1': 'inline label - always visible', 'historyc_2': 'inline label - always visible', 'VMap_Senti': 'inline label - always visible', 'historyc_3': 'inline label - always visible', 'historyc_4': 'inline label - always visible', 'VMap_Sen_1': 'inline label - always visible', });
lyr_Rnicepomidzyprocentowymiudziaamiprzebiegwrzekz1940i1990roku_2.set('fieldLabels', {'GRID_ID': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'VMap_PERCE': 'inline label - always visible', 'Sentinel_P': 'inline label - always visible', 'historyczn': 'inline label - always visible', 'historyc_1': 'inline label - always visible', 'historyc_2': 'inline label - always visible', 'VMap_Senti': 'inline label - always visible', 'historyc_3': 'inline label - always visible', 'historyc_4': 'inline label - always visible', 'VMap_Sen_1': 'inline label - always visible', });
lyr_Obszargdziezawszepynarzeka_3.set('fieldLabels', {'FID_bug_se': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'FID_HYDRO_': 'inline label - always visible', 'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - always visible', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID_1': 'inline label - always visible', 'FID_merge_': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Obszargdziekiedykolwiekpynarzeka_4.set('fieldLabels', {'FID_merge_': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'FID_bug_se': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'FID_HYDRO_': 'inline label - always visible', 'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - visible with data', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID_1': 'inline label - always visible', 'Perimeter_': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Przebiegrzekiw1940rokuMapahistoryczna_5.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Przebiegrzekiw1990rokuVMap_6.set('fieldLabels', {'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - always visible', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Przebiegrzekiw2024rokuSenitenl2_7.set('fieldLabels', {'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Przebiegrzekiw2024rokuSenitenl2_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});