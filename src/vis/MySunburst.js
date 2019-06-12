import React from 'react'

import { Sunburst } from 'react-vis'
import { EXTENDED_DISCRETE_COLOR_RANGE } from 'react-vis/dist/theme'
import LabelSeries from 'react-vis/dist/plot/series/label-series'
import styled from 'styled-components'

//import D3FlareData from '../datasets/d3-flare-example.json'
//import { visData } from './visData'

const LABEL_STYLE = {
  fontSize: '8px',
  textAnchor: 'middle',
}

/**
 * Recursively work backwards from highlighted node to find path of valud nodes
 * @param {Object} node - the current node being considered
 * @returns {Array} an array of strings describing the key route to the current node
 */
function getKeyPath(node) {
  if (!node.parent) {
    return ['root']
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  )
}

/**
 * Recursively modify data depending on whether or not each cell has been selected by the hover/highlight
 * @param {Object} data - the current node being considered
 * @param {Object|Boolean} keyPath - a map of keys that are in the highlight path
 * if this is false then all nodes are marked as selected
 * @returns {Object} Updated tree structure
 */
function updateData(data, keyPath) {
  if (data.children) {
    data.children.map(child => updateData(child, keyPath))
  }
  // add a fill to all the uncolored cells
  if (!data.hex) {
    data.style = {
      fill: EXTENDED_DISCRETE_COLOR_RANGE[5],
    }
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1,
  }

  return data
}

//const decoratedData = updateData(visData, false)
const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

export default class MySunburst extends React.Component {
  state = {
    pathValue: false,
    // data: { decoratedData },
    data: updateData(this.getPreparedData(this.props.data), false),
    finalValue: 'Seekarten',
    clicked: false,
  }
  /*
  <div>
  {clicked ? 'click to unlock selection' : 'click to lock selection'}
  </div>
  */

  render() {
    const { clicked, data, finalValue, pathValue } = this.state
    return (
      <Container className="basic-sunburst-example-wrapper">
        <Sunburst
          animation
          className="basic-sunburst-example"
          hideRootNode
          onValueMouseOver={node => {
            if (clicked) {
              return
            }
            const path = getKeyPath(node).reverse()
            const pathAsMap = path.reduce((res, row) => {
              res[row] = true
              return res
            }, {})
            this.setState({
              finalValue: path[path.length - 1],
              pathValue: path.join(' > '),
              data: updateData(this.state.data, pathAsMap),
            })
          }}
          onValueMouseOut={() =>
            clicked
              ? () => {}
              : this.setState({
                  pathValue: false,
                  finalValue: false,
                  data: updateData(this.state.data, false),
                })
          }
          onValueClick={() => this.setState({ clicked: !clicked })}
          style={{
            stroke: '#ddd',
            strokeOpacity: 0.3,
            strokeWidth: '0.5',
          }}
          colorType="literal"
          getSize={d => d.value}
          getColor={d => d.hex}
          data={data}
          height={300}
          width={350}
        >
          {finalValue && (
            <LabelSeries
              data={[
                {
                  x: 0,
                  y: 0,
                  label: finalValue,
                  style: LABEL_STYLE,
                },
              ]}
            />
          )}
        </Sunburst>
        <div className="basic-sunburst-example-path-name">{pathValue}</div>
      </Container>
    )
  }

  getPreparedData(chartList) {
    const chartsIch = chartList[0].categories.map(category => ({
      name: category.name,
      test: 'hsl(12, 76%, 61%)',
      hex:
        'hsl(12, ' +
        Math.max(
          Math.round(
            Number(this.getCategoryProgress(category.skillList)) * 0.76
          ),
          20
        ) +
        '%, ' +
        Math.min(
          Math.round(
            100 - Number(this.getCategoryProgress(category.skillList)) * 0.61
          ),
          95
        ) +
        '%)',
      value: 1,
      children: category.skillList.map(skill => ({
        name: skill.name,
        value: 1,
        hex:
          'hsl(12, ' +
          Math.max(Math.round(Number(skill.progress) * 0.76), 20) +
          '%, ' +
          Math.min(Math.round(100 - Number(skill.progress) * 0.61), 95) +
          '%)',
      })),
    }))

    const chartsWir = chartList[1].categories.map(category => ({
      name: category.name,
      test: 'hsl(27, 87%, 67%)',
      hex:
        'hsl(27, ' +
        Math.max(
          Math.round(
            Number(this.getCategoryProgress(category.skillList)) * 0.87
          ),
          20
        ) +
        '%, ' +
        Math.min(
          Math.round(
            100 - Number(this.getCategoryProgress(category.skillList)) * 0.67
          ),
          95
        ) +
        '%)',
      value: 1,
      children: category.skillList.map(skill => ({
        name: skill.name,
        value: 1,
        hex:
          'hsl(27, ' +
          Math.max(Math.round(Number(skill.progress) * 0.87), 20) +
          '%, ' +
          Math.min(Math.round(100 - Number(skill.progress) * 0.67), 95) +
          '%)',
      })),
    }))

    const chartsWelt = chartList[2].categories.map(category => ({
      name: category.name,
      test: 'hsl(173, 58%, 39%)',
      hex:
        'hsl(173, ' +
        Math.max(
          Math.round(
            Number(this.getCategoryProgress(category.skillList)) * 0.58
          ),
          20
        ) +
        '%, ' +
        Math.min(
          Math.round(
            100 - Number(this.getCategoryProgress(category.skillList)) * 0.39
          ),
          95
        ) +
        '%)',
      value: 1,
      children: category.skillList.map(skill => ({
        name: skill.name,
        value: 1,
        hex:
          'hsl(173, ' +
          Math.max(Math.round(Number(skill.progress) * 0.58), 20) +
          '%, ' +
          Math.min(Math.round(90 - Number(skill.progress) * 0.39), 95) +
          '%)',
      })),
    }))

    const visData = {
      children: [
        {
          name: 'Ich',
          hex: 'hsl(12, 76%, 61%)',
          children: chartsIch,
          value: 1,
        },
        {
          name: 'Wir',
          hex: 'hsl(27, 87%, 67%)',
          children: chartsWir,
          value: 1,
        },
        {
          name: 'Welt',
          hex: 'hsl(173, 58%, 39%)',
          children: chartsWelt,
          value: 1,
        },
      ],
    }
    return visData
  }

  getCategoryProgress(skillList) {
    return (
      skillList.reduce(
        (accumulator, currentSkill) => accumulator + currentSkill.progress,
        0
      ) / skillList.length
    )
  }
}
