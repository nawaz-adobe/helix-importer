/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import { encodeHTMLEntities, getDefaultContentComponentTemplate } from '../utils.js';

const resourceType = 'core/franklin/components/title/v1/title';

function getText(node) {
  return node.children.map((child) => child.value).join('');
}

const title = {
  use: (node) => node?.tagName.match(/h[1-6]/),
  getAttributes: (node, ctx) => ({
    rt: resourceType,
    'jcr:title': encodeHTMLEntities(getText(node)),
    type: node.tagName,
    ...getDefaultContentComponentTemplate(ctx.components, resourceType),
  }),
  leaf: true,
};

export default title;
