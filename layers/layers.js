var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_INDUSTRI_PT_50K_1 = new ol.format.GeoJSON();
var features_INDUSTRI_PT_50K_1 = format_INDUSTRI_PT_50K_1.readFeatures(json_INDUSTRI_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDUSTRI_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDUSTRI_PT_50K_1.addFeatures(features_INDUSTRI_PT_50K_1);
var lyr_INDUSTRI_PT_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDUSTRI_PT_50K_1, 
                style: style_INDUSTRI_PT_50K_1,
                interactive: false,
                title: '<img src="styles/legend/INDUSTRI_PT_50K_1.png" /> INDUSTRI_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_INDUSTRI_PT_50K_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_INDUSTRI_PT_50K_1];
lyr_INDUSTRI_PT_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KLSBBK': 'KLSBBK', 'KLSTKI': 'KLSTKI', 'KLSPRD': 'KLSPRD', 'KLSBMT': 'KLSBMT', 'KLSLOK': 'KLSLOK', 'KLSPRO': 'KLSPRO', 'KLSKOM': 'KLSKOM', 'KLSMOD': 'KLSMOD', 'KLSJNS': 'KLSJNS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_INDUSTRI_PT_50K_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KLSBBK': 'Range', 'KLSTKI': 'Range', 'KLSPRD': 'Range', 'KLSBMT': 'Range', 'KLSLOK': 'Range', 'KLSPRO': 'Range', 'KLSKOM': 'Range', 'KLSMOD': 'Range', 'KLSJNS': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_INDUSTRI_PT_50K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KLSBBK': 'no label', 'KLSTKI': 'no label', 'KLSPRD': 'no label', 'KLSBMT': 'no label', 'KLSLOK': 'no label', 'KLSPRO': 'no label', 'KLSKOM': 'no label', 'KLSMOD': 'no label', 'KLSJNS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_INDUSTRI_PT_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});