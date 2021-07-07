var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordepartamentoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_3 = format_PoblacinpordepartamentoINDEC_3.readFeatures(json_PoblacinpordepartamentoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_3.addFeatures(features_PoblacinpordepartamentoINDEC_3);
var lyr_PoblacinpordepartamentoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_3, 
                style: style_PoblacinpordepartamentoINDEC_3,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_0.png" /> 20.750 - 41.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_1.png" /> 41.001 - 105.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_2.png" /> 105.001 - 178.100<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_3.png" /> 178.101 o más<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 12.000 - 32.000<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 32.001 - 67.500<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 67.501 - 325.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 325.001 o más<br />'
        });
var format_ViviendasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_5 = format_ViviendasruralesINDEC_5.readFeatures(json_ViviendasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_5.addFeatures(features_ViviendasruralesINDEC_5);
var lyr_ViviendasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_5, 
                style: style_ViviendasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_0.png" /> 2.750 - 3.250<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_1.png" /> 3.251 - 5.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_2.png" /> 5.001 - 10.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_3.png" /> 10.001 - 13.500<br />'
        });
var format_CabezasporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasporcinosMAGyP_6 = format_CabezasporcinosMAGyP_6.readFeatures(json_CabezasporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasporcinosMAGyP_6.addFeatures(features_CabezasporcinosMAGyP_6);
var lyr_CabezasporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasporcinosMAGyP_6, 
                style: style_CabezasporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_0.png" /> 365 - 15.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_1.png" /> 15.001 - 40.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_2.png" /> 40.001 - 70.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_3.png" /> 70.001 o más<br />'
        });
var format_CabezasovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasovinosMAGyP_7 = format_CabezasovinosMAGyP_7.readFeatures(json_CabezasovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasovinosMAGyP_7.addFeatures(features_CabezasovinosMAGyP_7);
var lyr_CabezasovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasovinosMAGyP_7, 
                style: style_CabezasovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_0.png" /> 2.000 - 4.000<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_1.png" /> 4.001 - 6.500<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_2.png" /> 6.501 - 12.000<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_3.png" /> 12.001 - 25.000<br />'
        });
var format_CabezascaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezascaprinosMAGyP_8 = format_CabezascaprinosMAGyP_8.readFeatures(json_CabezascaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezascaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezascaprinosMAGyP_8.addFeatures(features_CabezascaprinosMAGyP_8);
var lyr_CabezascaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezascaprinosMAGyP_8, 
                style: style_CabezascaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_0.png" /> 450 - 650<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_1.png" /> 651 - 2.500<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_2.png" /> 2.501 - 12.500<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_3.png" /> 12.501 - 37.000<br />'
        });
var format_CabezasbovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasbovinosMAGyP_9 = format_CabezasbovinosMAGyP_9.readFeatures(json_CabezasbovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasbovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasbovinosMAGyP_9.addFeatures(features_CabezasbovinosMAGyP_9);
var lyr_CabezasbovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasbovinosMAGyP_9, 
                style: style_CabezasbovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_0.png" /> 130.000 - 180.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_1.png" /> 180.001 - 375.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_2.png" /> 375.001 - 700.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_3.png" /> 700.001 - 1.100.000<br />'
        });
var format_HectreashortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreashortalizasINDEC_10 = format_HectreashortalizasINDEC_10.readFeatures(json_HectreashortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreashortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreashortalizasINDEC_10.addFeatures(features_HectreashortalizasINDEC_10);
var lyr_HectreashortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreashortalizasINDEC_10, 
                style: style_HectreashortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_2.png" /> 201 - 1.475<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_3.png" /> 1.476 o más<br />'
        });
var format_HectreasalgodnMAGyP_11 = new ol.format.GeoJSON();
var features_HectreasalgodnMAGyP_11 = format_HectreasalgodnMAGyP_11.readFeatures(json_HectreasalgodnMAGyP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasalgodnMAGyP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasalgodnMAGyP_11.addFeatures(features_HectreasalgodnMAGyP_11);
var lyr_HectreasalgodnMAGyP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasalgodnMAGyP_11, 
                style: style_HectreasalgodnMAGyP_11,
                interactive: true,
    title: 'Hectáreas algodón (MAGyP)<br />\
    <img src="styles/legend/HectreasalgodnMAGyP_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasalgodnMAGyP_11_1.png" /> 1 - 2.000<br />\
    <img src="styles/legend/HectreasalgodnMAGyP_11_2.png" /> 2.001 - 11.500<br />\
    <img src="styles/legend/HectreasalgodnMAGyP_11_3.png" /> 11.501 o más<br />'
        });
var format_HectreasarrozMAGyP_12 = new ol.format.GeoJSON();
var features_HectreasarrozMAGyP_12 = format_HectreasarrozMAGyP_12.readFeatures(json_HectreasarrozMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasarrozMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasarrozMAGyP_12.addFeatures(features_HectreasarrozMAGyP_12);
var lyr_HectreasarrozMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasarrozMAGyP_12, 
                style: style_HectreasarrozMAGyP_12,
                interactive: true,
    title: 'Hectáreas arroz (MAGyP)<br />\
    <img src="styles/legend/HectreasarrozMAGyP_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasarrozMAGyP_12_1.png" /> 12.600<br />\
    <img src="styles/legend/HectreasarrozMAGyP_12_2.png" /> 17.200<br />'
        });
var format_HectreasmazMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasmazMAGyP_13 = format_HectreasmazMAGyP_13.readFeatures(json_HectreasmazMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasmazMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasmazMAGyP_13.addFeatures(features_HectreasmazMAGyP_13);
var lyr_HectreasmazMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasmazMAGyP_13, 
                style: style_HectreasmazMAGyP_13,
                interactive: true,
    title: 'Hectáreas maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_0.png" /> 1.000 - 10.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_1.png" /> 10.001 - 25.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_2.png" /> 25.001 - 72.500<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_3.png" /> 72.501 - 120.000<br />'
        });
var format_HectreastrigoMAGyP_14 = new ol.format.GeoJSON();
var features_HectreastrigoMAGyP_14 = format_HectreastrigoMAGyP_14.readFeatures(json_HectreastrigoMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreastrigoMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreastrigoMAGyP_14.addFeatures(features_HectreastrigoMAGyP_14);
var lyr_HectreastrigoMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreastrigoMAGyP_14, 
                style: style_HectreastrigoMAGyP_14,
                interactive: true,
    title: 'Hectáreas trigo (MAGyP)<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_1.png" /> 1 - 10.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_2.png" /> 10.001 - 62.500<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_3.png" /> 62.501 - 120.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_4.png" /> 120.001 o más<br />'
        });
var format_HectreasgirasolMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasgirasolMAGyP_15 = format_HectreasgirasolMAGyP_15.readFeatures(json_HectreasgirasolMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasgirasolMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasgirasolMAGyP_15.addFeatures(features_HectreasgirasolMAGyP_15);
var lyr_HectreasgirasolMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasgirasolMAGyP_15, 
                style: style_HectreasgirasolMAGyP_15,
                interactive: true,
    title: 'Hectáreas girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_15_1.png" /> 2.500 - 20.000<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_15_2.png" /> 20.001 - 50.000<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_15_3.png" /> 50.001 o más<br />'
        });
var format_HectreassojaMAGyP_16 = new ol.format.GeoJSON();
var features_HectreassojaMAGyP_16 = format_HectreassojaMAGyP_16.readFeatures(json_HectreassojaMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassojaMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassojaMAGyP_16.addFeatures(features_HectreassojaMAGyP_16);
var lyr_HectreassojaMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassojaMAGyP_16, 
                style: style_HectreassojaMAGyP_16,
                interactive: true,
    title: 'Hectáreas soja (MAGyP)<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_0.png" /> 3.250 - 20.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_1.png" /> 20.001 - 72.500<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_2.png" /> 72.501 - 175.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_3.png" /> 175.001 o más<br />'
        });
var format_Localidades_17 = new ol.format.GeoJSON();
var features_Localidades_17 = format_Localidades_17.readFeatures(json_Localidades_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_17.addFeatures(features_Localidades_17);
var lyr_Localidades_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_17, 
                style: style_Localidades_17,
                interactive: true,
                title: '<img src="styles/legend/Localidades_17.png" /> Localidades'
            });
var format_Capacitaciones2019tcnicas_18 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_18 = format_Capacitaciones2019tcnicas_18.readFeatures(json_Capacitaciones2019tcnicas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_18.addFeatures(features_Capacitaciones2019tcnicas_18);
var lyr_Capacitaciones2019tcnicas_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_18, 
                style: style_Capacitaciones2019tcnicas_18,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_18.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018tcnicas_19 = new ol.format.GeoJSON();
var features_Capacitaciones2018tcnicas_19 = format_Capacitaciones2018tcnicas_19.readFeatures(json_Capacitaciones2018tcnicas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018tcnicas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018tcnicas_19.addFeatures(features_Capacitaciones2018tcnicas_19);
var lyr_Capacitaciones2018tcnicas_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018tcnicas_19, 
                style: style_Capacitaciones2018tcnicas_19,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018tcnicas_19.png" /> Capacitaciones 2018 (técnicas)'
            });
var format_BER_20 = new ol.format.GeoJSON();
var features_BER_20 = format_BER_20.readFeatures(json_BER_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_20.addFeatures(features_BER_20);
var lyr_BER_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_20, 
                style: style_BER_20,
                interactive: true,
                title: '<img src="styles/legend/BER_20.png" /> BER'
            });
var format_BER_21 = new ol.format.GeoJSON();
var features_BER_21 = format_BER_21.readFeatures(json_BER_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_21.addFeatures(features_BER_21);
var lyr_BER_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_21, 
                style: style_BER_21,
                interactive: true,
                title: '<img src="styles/legend/BER_21.png" /> BER'
            });
var format_Delegacin_22 = new ol.format.GeoJSON();
var features_Delegacin_22 = format_Delegacin_22.readFeatures(json_Delegacin_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_22.addFeatures(features_Delegacin_22);
var lyr_Delegacin_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_22, 
                style: style_Delegacin_22,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_22.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordepartamentoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasruralesINDEC_5.setVisible(true);lyr_CabezasporcinosMAGyP_6.setVisible(true);lyr_CabezasovinosMAGyP_7.setVisible(true);lyr_CabezascaprinosMAGyP_8.setVisible(true);lyr_CabezasbovinosMAGyP_9.setVisible(true);lyr_HectreashortalizasINDEC_10.setVisible(true);lyr_HectreasalgodnMAGyP_11.setVisible(true);lyr_HectreasarrozMAGyP_12.setVisible(true);lyr_HectreasmazMAGyP_13.setVisible(true);lyr_HectreastrigoMAGyP_14.setVisible(true);lyr_HectreasgirasolMAGyP_15.setVisible(true);lyr_HectreassojaMAGyP_16.setVisible(true);lyr_Localidades_17.setVisible(true);lyr_Capacitaciones2019tcnicas_18.setVisible(true);lyr_Capacitaciones2018tcnicas_19.setVisible(true);lyr_BER_20.setVisible(true);lyr_BER_21.setVisible(true);lyr_Delegacin_22.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordepartamentoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasruralesINDEC_5,lyr_CabezasporcinosMAGyP_6,lyr_CabezasovinosMAGyP_7,lyr_CabezascaprinosMAGyP_8,lyr_CabezasbovinosMAGyP_9,lyr_HectreashortalizasINDEC_10,lyr_HectreasalgodnMAGyP_11,lyr_HectreasarrozMAGyP_12,lyr_HectreasmazMAGyP_13,lyr_HectreastrigoMAGyP_14,lyr_HectreasgirasolMAGyP_15,lyr_HectreassojaMAGyP_16,lyr_Localidades_17,lyr_Capacitaciones2019tcnicas_18,lyr_Capacitaciones2018tcnicas_19,lyr_BER_20,lyr_BER_21,lyr_Delegacin_22];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasruralesINDEC_5.set('fieldAliases', {'Viv Rur': 'Viv Rur', });
lyr_CabezasporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezascaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasbovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreashortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasalgodnMAGyP_11.set('fieldAliases', {'Algodon': 'Algodon', });
lyr_HectreasarrozMAGyP_12.set('fieldAliases', {'Arroz': 'Arroz', });
lyr_HectreasmazMAGyP_13.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreastrigoMAGyP_14.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasgirasolMAGyP_15.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreassojaMAGyP_16.set('fieldAliases', {'Soja': 'Soja', });
lyr_Localidades_17.set('fieldAliases', {'Localidad': 'Localidad', 'Personas': 'Personas', });
lyr_Capacitaciones2019tcnicas_18.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018tcnicas_19.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_BER_20.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_BER_21.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_Delegacin_22.set('fieldAliases', {'Delegacion': 'Delegacion', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldImages', {'Poblacion': '', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasruralesINDEC_5.set('fieldImages', {'Viv Rur': 'TextEdit', });
lyr_CabezasporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasovinosMAGyP_7.set('fieldImages', {'Ovinos': '', });
lyr_CabezascaprinosMAGyP_8.set('fieldImages', {'Caprinos': '', });
lyr_CabezasbovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreashortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasalgodnMAGyP_11.set('fieldImages', {'Algodon': 'TextEdit', });
lyr_HectreasarrozMAGyP_12.set('fieldImages', {'Arroz': 'TextEdit', });
lyr_HectreasmazMAGyP_13.set('fieldImages', {'Maiz': '', });
lyr_HectreastrigoMAGyP_14.set('fieldImages', {'Trigo': '', });
lyr_HectreasgirasolMAGyP_15.set('fieldImages', {'Girasol': '', });
lyr_HectreassojaMAGyP_16.set('fieldImages', {'Soja': '', });
lyr_Localidades_17.set('fieldImages', {'Localidad': '', 'Personas': '', });
lyr_Capacitaciones2019tcnicas_18.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2018tcnicas_19.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_BER_20.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_BER_21.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Delegacin_22.set('fieldImages', {'Delegacion': 'TextEdit', 'Direccion': 'TextEdit', 'Prest 2016': '', 'Prest 2017': '', 'Prest 2018': '', 'Prest 2019': '', 'Prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasruralesINDEC_5.set('fieldLabels', {'Viv Rur': 'inline label', });
lyr_CabezasporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezascaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasbovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreashortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasalgodnMAGyP_11.set('fieldLabels', {'Algodon': 'inline label', });
lyr_HectreasarrozMAGyP_12.set('fieldLabels', {'Arroz': 'inline label', });
lyr_HectreasmazMAGyP_13.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreastrigoMAGyP_14.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasgirasolMAGyP_15.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreassojaMAGyP_16.set('fieldLabels', {'Soja': 'inline label', });
lyr_Localidades_17.set('fieldLabels', {'Localidad': 'inline label', 'Personas': 'inline label', });
lyr_Capacitaciones2019tcnicas_18.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018tcnicas_19.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_BER_20.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_BER_21.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_Delegacin_22.set('fieldLabels', {'Delegacion': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_Delegacin_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});