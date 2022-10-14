import React from 'react';
import Globe from 'globe.gl'
import * as d3 from 'd3';
import './globe.scss';
import { ReactDOM } from 'react';

class GlobeView extends React.Component {

    componentDidMount(){    
        
        // document.addEventListener("click", (e) => {
        //     console.log(e.target)
        // })



        const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);

        // GDP per capita (avoiding countries with small pop)
        const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

        fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
        {
        const maxVal = Math.max(...countries.features.map(getVal));
        colorScale.domain([0, maxVal]);

        const world = Globe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            // .backgroundImageUrl('https://cosmosurfaces.com/wp-content/uploads/2021/03/Blue-Sky-3cm-401185-2.jpg')
            // .backgroundColor("rgba(0,0,0,0)")
            .lineHoverPrecision(0)
            .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
            .polygonAltitude(0.02)
            .polygonCapColor(feat => colorScale(getVal(feat)))
            .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
            .polygonStrokeColor(() => '#111')
            .polygonLabel(({ properties: d }) => `
            <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
            GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
            Population: <i>${d.POP_EST}</i>
            `)
            .onPolygonHover(hoverD => world
            .polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
            .polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
            )
            .onPolygonClick((polygon) => console.log('polygon', polygon))
            .polygonsTransitionDuration(300)
        (document.getElementById('globeViz'))
        });
    
    }

    render(){
        return <div className='globe-container'>
            <script src="//unpkg.com/react/umd/react.production.min.js"></script>
            <script src="//unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
            <script src="//unpkg.com/babel-standalone"></script>

            <script src="//unpkg.com/d3"></script>
            <div id="globeViz"></div>
        </div>
    }

}

export default GlobeView;