import React from 'react';
import PropTypes from 'prop-types';

import { GeometryRepresentation as VtkItem } from 'react-vtk-js';

/**
 * GeometryRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - actor: Properties to assign to the vtkActor
 *   - mapper: Properties to assign to the vtkMapper
 *   - property: Properties to assign to the vtkProperty (actor.getProperty())
 *   - colorMapPreset: Name of the preset to use for controlling the color mapping
 *   - colorDataRange: Range to use for the color scale
 */
export default function GeometryRepresentation(props) {
  return <VtkItem {...props} />;
};

GeometryRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: [0, 1],
};

GeometryRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * Properties to set to the actor
   */
  actor: PropTypes.object,

  /**
   * Properties to set to the actor
   */
  mapper: PropTypes.object,

  /**
   * Properties to set to the actor.property
   */
  property: PropTypes.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: PropTypes.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: PropTypes.arrayOf(PropTypes.number),

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
