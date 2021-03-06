/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * Google Container Engine API
 *
 * The Google Container Engine API is used for building and managing container based applications, powered by the open source Kubernetes technology.
 *
 * @example
 * const google = require('googleapis');
 * const container = google.container('v1');
 *
 * @namespace container
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Container
 */
function Container(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {

    zones: {

      /**
       * container.projects.zones.getServerconfig
       *
       * @desc Returns configuration info about the Container Engine service.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Container Engine API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/container
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //    https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var container = google.container('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // The Google Developers Console [project ID or project number]
       *     // (https://support.google.com/cloud/answer/6158840).
       *     projectId: '',  // TODO: Update placeholder value.
       *
       *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations
       *     // for.
       *     zone: '',  // TODO: Update placeholder value.
       *
       *     auth: authClient
       *   };
       *
       *   container.projects.zones.getServerconfig(request, function(err, response) {
       *     if (err) {
       *       console.log(err);
       *       return;
       *     }
       *
       *     // TODO: Change code below to process the `response` object:
       *     console.log(JSON.stringify(response, null, 2));
       *   });
       * });
       *
       * function authorize(callback) {
       *   google.auth.getApplicationDefault(function(err, authClient)) {
       *     if (err) {
       *       console.log('authentication failed: ', err);
       *       return;
       *     }
       *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *       authClient = authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       *
       * @alias container.projects.zones.getServerconfig
       * @memberOf! container(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
       * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getServerconfig: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: Object.assign({
            url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/serverconfig',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId', 'zone'],
          pathParams: ['projectId', 'zone'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      clusters: {

        /**
         * container.projects.zones.clusters.completeIpRotation
         *
         * @desc Completes master IP rotation.
         *
         * @alias container.projects.zones.clusters.completeIpRotation
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster.
         * @param {container(v1).CompleteIPRotationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        completeIpRotation: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.get
         *
         * @desc Gets the details of a specific cluster.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
         *     // resides.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     // The name of the cluster to retrieve.
         *     clusterId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.clusters.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.clusters.get
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.legacyAbac
         *
         * @desc Enables or disables the ABAC authorization mechanism on a cluster.
         *
         * @alias container.projects.zones.clusters.legacyAbac
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to update.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {container(v1).SetLegacyAbacRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        legacyAbac: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['zone', 'clusterId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.update
         *
         * @desc Updates the settings of a specific cluster.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
         *     // resides.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     // The name of the cluster to upgrade.
         *     clusterId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.clusters.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.clusters.update
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to upgrade.
         * @param {container(v1).UpdateClusterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.startIpRotation
         *
         * @desc Start master IP rotation.
         *
         * @alias container.projects.zones.clusters.startIpRotation
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster.
         * @param {container(v1).StartIPRotationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startIpRotation: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.setMasterAuth
         *
         * @desc Used to set master auth materials. Currently supports :- Changing the admin password of a specific cluster. This can be either via password generation or explicitly set the password.
         *
         * @alias container.projects.zones.clusters.setMasterAuth
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to upgrade.
         * @param {container(v1).SetMasterAuthRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMasterAuth: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.delete
         *
         * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes.  Firewalls and routes that were configured during cluster creation are also deleted.  Other Google Compute Engine resources that might be in use by the cluster (e.g. load balancer resources) will not be deleted if they weren't present at the initial create time.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
         *     // resides.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     // The name of the cluster to delete.
         *     clusterId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.clusters.delete(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.clusters.delete
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.list
         *
         * @desc Lists all clusters owned by a project in either the specified zone or all zones.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
         *     // resides, or "-" for all zones.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.clusters.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.clusters.list
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['zone', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.create
         *
         * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.  By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks).  One firewall is added for the cluster. After cluster creation, the cluster creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, an entry is added to the project's global metadata indicating which CIDR range is being used by the cluster.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
         *     // resides.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.clusters.create(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.clusters.create
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {container(v1).CreateClusterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.resourceLabels
         *
         * @desc Sets labels on a cluster.
         *
         * @alias container.projects.zones.clusters.resourceLabels
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
         * @param {container(v1).SetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resourceLabels: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['zone', 'clusterId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        nodePools: {

          /**
           * container.projects.zones.clusters.nodePools.get
           *
           * @desc Retrieves the node pool requested.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Google Container Engine API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/container
           * // 2. This sample uses Application Default Credentials for authentication.
           * //    If not already done, install the gcloud CLI from
           * //    https://cloud.google.com/sdk and run
           * //    `gcloud beta auth application-default login`.
           * //    For more information, see
           * //    https://developers.google.com/identity/protocols/application-default-credentials
           * // 3. Install the Node.js client library by running
           * //    `npm install googleapis --save`
           *
           * var google = require('googleapis');
           * var container = google.container('v1');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // The Google Developers Console [project ID or project number]
           *     // (https://developers.google.com/console/help/new/#projectnumber).
           *     projectId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
           *     // resides.
           *     zone: '',  // TODO: Update placeholder value.
           *
           *     // The name of the cluster.
           *     clusterId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the node pool.
           *     nodePoolId: '',  // TODO: Update placeholder value.
           *
           *     auth: authClient
           *   };
           *
           *   container.projects.zones.clusters.nodePools.get(request, function(err, response) {
           *     if (err) {
           *       console.log(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient)) {
           *     if (err) {
           *       console.log('authentication failed: ', err);
           *       return;
           *     }
           *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
           *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
           *       authClient = authClient.createScoped(scopes);
           *     }
           *     callback(authClient);
           *   });
           * }
           *
           * @alias container.projects.zones.clusters.nodePools.get
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster.
           * @param {string} params.nodePoolId The name of the node pool.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          get: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const parameters = {
              options: Object.assign({
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}',
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['zone', 'clusterId', 'nodePoolId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.setManagement
           *
           * @desc Sets the NodeManagement options for a node pool.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Google Container Engine API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/container
           * // 2. This sample uses Application Default Credentials for authentication.
           * //    If not already done, install the gcloud CLI from
           * //    https://cloud.google.com/sdk and run
           * //    `gcloud beta auth application-default login`.
           * //    For more information, see
           * //    https://developers.google.com/identity/protocols/application-default-credentials
           * // 3. Install the Node.js client library by running
           * //    `npm install googleapis --save`
           *
           * var google = require('googleapis');
           * var container = google.container('v1');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // The Google Developers Console [project ID or project number]
           *     // (https://support.google.com/cloud/answer/6158840).
           *     projectId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
           *     // resides.
           *     zone: '',  // TODO: Update placeholder value.
           *
           *     // The name of the cluster to update.
           *     clusterId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the node pool to update.
           *     nodePoolId: '',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient
           *   };
           *
           *   container.projects.zones.clusters.nodePools.setManagement(request, function(err, response) {
           *     if (err) {
           *       console.log(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient)) {
           *     if (err) {
           *       console.log('authentication failed: ', err);
           *       return;
           *     }
           *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
           *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
           *       authClient = authClient.createScoped(scopes);
           *     }
           *     callback(authClient);
           *   });
           * }
           *
           * @alias container.projects.zones.clusters.nodePools.setManagement
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster to update.
           * @param {string} params.nodePoolId The name of the node pool to update.
           * @param {container(v1).SetNodePoolManagementRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          setManagement: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const parameters = {
              options: Object.assign({
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement',
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.delete
           *
           * @desc Deletes a node pool from a cluster.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Google Container Engine API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/container
           * // 2. This sample uses Application Default Credentials for authentication.
           * //    If not already done, install the gcloud CLI from
           * //    https://cloud.google.com/sdk and run
           * //    `gcloud beta auth application-default login`.
           * //    For more information, see
           * //    https://developers.google.com/identity/protocols/application-default-credentials
           * // 3. Install the Node.js client library by running
           * //    `npm install googleapis --save`
           *
           * var google = require('googleapis');
           * var container = google.container('v1');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // The Google Developers Console [project ID or project number]
           *     // (https://developers.google.com/console/help/new/#projectnumber).
           *     projectId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
           *     // resides.
           *     zone: '',  // TODO: Update placeholder value.
           *
           *     // The name of the cluster.
           *     clusterId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the node pool to delete.
           *     nodePoolId: '',  // TODO: Update placeholder value.
           *
           *     auth: authClient
           *   };
           *
           *   container.projects.zones.clusters.nodePools.delete(request, function(err, response) {
           *     if (err) {
           *       console.log(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient)) {
           *     if (err) {
           *       console.log('authentication failed: ', err);
           *       return;
           *     }
           *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
           *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
           *       authClient = authClient.createScoped(scopes);
           *     }
           *     callback(authClient);
           *   });
           * }
           *
           * @alias container.projects.zones.clusters.nodePools.delete
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster.
           * @param {string} params.nodePoolId The name of the node pool to delete.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          delete: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const parameters = {
              options: Object.assign({
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}',
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.list
           *
           * @desc Lists the node pools for a cluster.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Google Container Engine API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/container
           * // 2. This sample uses Application Default Credentials for authentication.
           * //    If not already done, install the gcloud CLI from
           * //    https://cloud.google.com/sdk and run
           * //    `gcloud beta auth application-default login`.
           * //    For more information, see
           * //    https://developers.google.com/identity/protocols/application-default-credentials
           * // 3. Install the Node.js client library by running
           * //    `npm install googleapis --save`
           *
           * var google = require('googleapis');
           * var container = google.container('v1');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // The Google Developers Console [project ID or project number]
           *     // (https://developers.google.com/console/help/new/#projectnumber).
           *     projectId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
           *     // resides.
           *     zone: '',  // TODO: Update placeholder value.
           *
           *     // The name of the cluster.
           *     clusterId: '',  // TODO: Update placeholder value.
           *
           *     auth: authClient
           *   };
           *
           *   container.projects.zones.clusters.nodePools.list(request, function(err, response) {
           *     if (err) {
           *       console.log(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient)) {
           *     if (err) {
           *       console.log('authentication failed: ', err);
           *       return;
           *     }
           *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
           *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
           *       authClient = authClient.createScoped(scopes);
           *     }
           *     callback(authClient);
           *   });
           * }
           *
           * @alias container.projects.zones.clusters.nodePools.list
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const parameters = {
              options: Object.assign({
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools',
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId'],
              pathParams: ['clusterId', 'projectId', 'zone'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.rollback
           *
           * @desc Roll back the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Google Container Engine API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/container
           * // 2. This sample uses Application Default Credentials for authentication.
           * //    If not already done, install the gcloud CLI from
           * //    https://cloud.google.com/sdk and run
           * //    `gcloud beta auth application-default login`.
           * //    For more information, see
           * //    https://developers.google.com/identity/protocols/application-default-credentials
           * // 3. Install the Node.js client library by running
           * //    `npm install googleapis --save`
           *
           * var google = require('googleapis');
           * var container = google.container('v1');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // The Google Developers Console [project ID or project number]
           *     // (https://support.google.com/cloud/answer/6158840).
           *     projectId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
           *     // resides.
           *     zone: '',  // TODO: Update placeholder value.
           *
           *     // The name of the cluster to rollback.
           *     clusterId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the node pool to rollback.
           *     nodePoolId: '',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient
           *   };
           *
           *   container.projects.zones.clusters.nodePools.rollback(request, function(err, response) {
           *     if (err) {
           *       console.log(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient)) {
           *     if (err) {
           *       console.log('authentication failed: ', err);
           *       return;
           *     }
           *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
           *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
           *       authClient = authClient.createScoped(scopes);
           *     }
           *     callback(authClient);
           *   });
           * }
           *
           * @alias container.projects.zones.clusters.nodePools.rollback
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster to rollback.
           * @param {string} params.nodePoolId The name of the node pool to rollback.
           * @param {container(v1).RollbackNodePoolUpgradeRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          rollback: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const parameters = {
              options: Object.assign({
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback',
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.create
           *
           * @desc Creates a node pool for a cluster.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Google Container Engine API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/container
           * // 2. This sample uses Application Default Credentials for authentication.
           * //    If not already done, install the gcloud CLI from
           * //    https://cloud.google.com/sdk and run
           * //    `gcloud beta auth application-default login`.
           * //    For more information, see
           * //    https://developers.google.com/identity/protocols/application-default-credentials
           * // 3. Install the Node.js client library by running
           * //    `npm install googleapis --save`
           *
           * var google = require('googleapis');
           * var container = google.container('v1');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // The Google Developers Console [project ID or project number]
           *     // (https://developers.google.com/console/help/new/#projectnumber).
           *     projectId: '',  // TODO: Update placeholder value.
           *
           *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
           *     // resides.
           *     zone: '',  // TODO: Update placeholder value.
           *
           *     // The name of the cluster.
           *     clusterId: '',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient
           *   };
           *
           *   container.projects.zones.clusters.nodePools.create(request, function(err, response) {
           *     if (err) {
           *       console.log(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient)) {
           *     if (err) {
           *       console.log('authentication failed: ', err);
           *       return;
           *     }
           *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
           *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
           *       authClient = authClient.createScoped(scopes);
           *     }
           *     callback(authClient);
           *   });
           * }
           *
           * @alias container.projects.zones.clusters.nodePools.create
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster.
           * @param {container(v1).CreateNodePoolRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          create: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const parameters = {
              options: Object.assign({
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools',
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId'],
              pathParams: ['projectId', 'zone', 'clusterId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      },

      operations: {

        /**
         * container.projects.zones.operations.list
         *
         * @desc Lists all operations in a project in a specific zone or all zones.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations
         *     // for, or `-` for all zones.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.operations.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.operations.list
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/operations',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.operations.get
         *
         * @desc Gets the specified operation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster
         *     // resides.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     // The server-assigned `name` of the operation.
         *     operationId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.operations.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.operations.get
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operationId The server-assigned `name` of the operation.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/operations/{operationId}',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'operationId'],
            pathParams: ['operationId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.operations.cancel
         *
         * @desc Cancels the specified operation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Container Engine API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/container
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var container = google.container('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Google Developers Console [project ID or project number]
         *     // (https://support.google.com/cloud/answer/6158840).
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation
         *     // resides.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     // The server-assigned `name` of the operation.
         *     operationId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   container.projects.zones.operations.cancel(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias container.projects.zones.operations.cancel
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operationId The server-assigned `name` of the operation.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides.
         * @param {container(v1).CancelOperationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: Object.assign({
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'operationId'],
            pathParams: ['operationId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef ClusterUpdate
 * @memberOf! container(v1)
 * @type object
* @property {string} desiredNodePoolId The node pool to be upgraded. This field is mandatory if
&quot;desired_node_version&quot;, &quot;desired_image_family&quot; or
&quot;desired_node_pool_autoscaling&quot; is specified and there is more than one
node pool on the cluster.
* @property {string} desiredNodeVersion The Kubernetes version to change the nodes to (typically an
upgrade). Use `-` to upgrade to the latest version supported by
the server.
* @property {string} desiredMasterVersion The Kubernetes version to change the master to. The only valid value is the
latest supported version. Use &quot;-&quot; to have the server automatically select
the latest version.
* @property {string[]} desiredLocations The desired list of Google Compute Engine
[locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
should be located. Changing the locations a cluster is in will result
in nodes being either created or removed from the cluster, depending on
whether locations are being added or removed.

This list must always include the cluster&#39;s primary zone.
* @property {container(v1).NodePoolAutoscaling} desiredNodePoolAutoscaling Autoscaler configuration for the node pool specified in
desired_node_pool_id. If there is only one pool in the
cluster and desired_node_pool_id is not provided then
the change applies to that single node pool.
* @property {string} desiredMonitoringService The monitoring service the cluster should use to write metrics.
Currently available options:

* &quot;monitoring.googleapis.com&quot; - the Google Cloud Monitoring service
* &quot;none&quot; - no metrics will be exported from the cluster
* @property {string} desiredImageType The desired image type for the node pool.
NOTE: Set the &quot;desired_node_pool&quot; field as well.
* @property {container(v1).AddonsConfig} desiredAddonsConfig Configurations for the various addons available to run in the cluster.
*/
/**
 * @typedef HorizontalPodAutoscaling
 * @memberOf! container(v1)
 * @type object
* @property {boolean} disabled Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.
When enabled, it ensures that a Heapster pod is running in the cluster,
which is also used by the Cloud Monitoring service.
*/
/**
 * @typedef SetNodePoolManagementRequest
 * @memberOf! container(v1)
 * @type object
 * @property {container(v1).NodeManagement} management NodeManagement configuration for the node pool.
 */
/**
 * @typedef Empty
 * @memberOf! container(v1)
 * @type object
 */
/**
 * @typedef CreateClusterRequest
 * @memberOf! container(v1)
 * @type object
* @property {container(v1).Cluster} cluster A [cluster
resource](/container-engine/reference/rest/v1/projects.zones.clusters)
*/
/**
 * @typedef ListNodePoolsResponse
 * @memberOf! container(v1)
 * @type object
 * @property {container(v1).NodePool[]} nodePools A list of node pools for a cluster.
 */
/**
 * @typedef CompleteIPRotationRequest
 * @memberOf! container(v1)
 * @type object
 */
/**
 * @typedef StartIPRotationRequest
 * @memberOf! container(v1)
 * @type object
 */
/**
 * @typedef LegacyAbac
 * @memberOf! container(v1)
 * @type object
* @property {boolean} enabled Whether the ABAC authorizer is enabled for this cluster. When enabled,
identities in the system, including service accounts, nodes, and
controllers, will have statically granted permissions beyond those
provided by the RBAC configuration or IAM.
*/
/**
 * @typedef NodePool
 * @memberOf! container(v1)
 * @type object
* @property {string} status [Output only] The status of the nodes in this pool instance.
* @property {container(v1).NodeConfig} config The node configuration of the pool.
* @property {string} name The name of the node pool.
* @property {string} statusMessage [Output only] Additional information about the current status of this
node pool instance, if available.
* @property {container(v1).NodePoolAutoscaling} autoscaling Autoscaler configuration for this NodePool. Autoscaler is enabled
only if a valid configuration is present.
* @property {integer} initialNodeCount The initial node count for the pool. You must ensure that your
Compute Engine &lt;a href=&quot;/compute/docs/resource-quotas&quot;&gt;resource quota&lt;/a&gt;
is sufficient for this number of instances. You must also have available
firewall and routes quota.
* @property {container(v1).NodeManagement} management NodeManagement configuration for this NodePool.
* @property {string} selfLink [Output only] Server-defined URL for the resource.
* @property {string[]} instanceGroupUrls [Output only] The resource URLs of [instance
groups](/compute/docs/instance-groups/) associated with this
node pool.
* @property {string} version [Output only] The version of the Kubernetes of this node.
*/
/**
 * @typedef SetLabelsRequest
 * @memberOf! container(v1)
 * @type object
* @property {object} resourceLabels The labels to set for that cluster.
* @property {string} labelFingerprint The fingerprint of the previous set of labels for this resource,
used to detect conflicts. The fingerprint is initially generated by
Container Engine and changes after every request to modify or update
labels. You must always provide an up-to-date fingerprint hash when
updating or changing labels. Make a &lt;code&gt;get()&lt;/code&gt; request to the
resource to get the latest fingerprint.
*/
/**
 * @typedef NodeManagement
 * @memberOf! container(v1)
 * @type object
* @property {boolean} autoUpgrade A flag that specifies whether node auto-upgrade is enabled for the node
pool. If enabled, node auto-upgrade helps keep the nodes in your node pool
up to date with the latest release version of Kubernetes.
* @property {boolean} autoRepair A flag that specifies whether the node auto-repair is enabled for the node
pool. If enabled, the nodes in this node pool will be monitored and, if
they fail health checks too many times, an automatic repair action will be
triggered.
* @property {container(v1).AutoUpgradeOptions} upgradeOptions Specifies the Auto Upgrade knobs for the node pool.
*/
/**
 * @typedef CancelOperationRequest
 * @memberOf! container(v1)
 * @type object
 */
/**
 * @typedef SetLegacyAbacRequest
 * @memberOf! container(v1)
 * @type object
 * @property {boolean} enabled Whether ABAC authorization will be enabled in the cluster.
 */
/**
 * @typedef Operation
 * @memberOf! container(v1)
 * @type object
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the operation
is taking place.
* @property {string} status The current status of the operation.
* @property {string} name The server-assigned ID for the operation.
* @property {string} statusMessage If an error has occurred, a textual description of the error.
* @property {string} selfLink Server-defined URL for the resource.
* @property {string} targetLink Server-defined URL for the target of the operation.
* @property {string} detail Detailed operation progress, if available.
* @property {string} operationType The operation type.
*/
/**
 * @typedef AddonsConfig
 * @memberOf! container(v1)
 * @type object
* @property {container(v1).HorizontalPodAutoscaling} horizontalPodAutoscaling Configuration for the horizontal pod autoscaling feature, which
increases or decreases the number of replica pods a replication controller
has based on the resource usage of the existing pods.
* @property {container(v1).HttpLoadBalancing} httpLoadBalancing Configuration for the HTTP (L7) load balancing controller addon, which
makes it easy to set up HTTP load balancers for services in a cluster.
*/
/**
 * @typedef RollbackNodePoolUpgradeRequest
 * @memberOf! container(v1)
 * @type object
 */
/**
 * @typedef UpdateClusterRequest
 * @memberOf! container(v1)
 * @type object
 * @property {container(v1).ClusterUpdate} update A description of the update.
 */
/**
 * @typedef Cluster
 * @memberOf! container(v1)
 * @type object
* @property {string} status [Output only] The current status of this cluster.
* @property {string} currentNodeVersion [Output only] The current version of the node software components.
If they are currently at multiple versions because they&#39;re in the process
of being upgraded, this reflects the minimum version of all nodes.
* @property {string} subnetwork The name of the Google Compute Engine
[subnetwork](/compute/docs/subnetworks) to which the
cluster is connected.
* @property {string} name The name of this cluster. The name must be unique within this project
and zone, and can be up to 40 characters with the following restrictions:

* Lowercase letters, numbers, and hyphens only.
* Must start with a letter.
* Must end with a number or a letter.
* @property {object} resourceLabels The resource labels for the cluster to use to annotate any related GCE
resources.
* @property {string} initialClusterVersion The initial Kubernetes version for this cluster.  Valid versions are those
found in validMasterVersions returned by getServerConfig.  The version can
be upgraded over time; such upgrades are reflected in
currentMasterVersion and currentNodeVersion.
* @property {string} endpoint [Output only] The IP address of this cluster&#39;s master endpoint.
The endpoint can be accessed from the internet at
`https://username:password@endpoint/`.

See the `masterAuth` property of this resource for username and
password information.
* @property {container(v1).LegacyAbac} legacyAbac Configuration for the legacy ABAC authorization mode.
* @property {string} createTime [Output only] The time the cluster was created, in
[RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} clusterIpv4Cidr The IP address range of the container pods in this cluster, in
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `10.96.0.0/14`). Leave blank to have
one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
* @property {integer} initialNodeCount The number of nodes to create in this cluster. You must ensure that your
Compute Engine &lt;a href=&quot;/compute/docs/resource-quotas&quot;&gt;resource quota&lt;/a&gt;
is sufficient for this number of instances. You must also have available
firewall and routes quota.
For requests, this field should only be used in lieu of a
&quot;node_pool&quot; object, since this configuration (along with the
&quot;node_config&quot;) will be used to create a &quot;NodePool&quot; object with an
auto-generated name. Do not use this and a node_pool at the same time.
* @property {string} selfLink [Output only] Server-defined URL for the resource.
* @property {container(v1).NodePool[]} nodePools The node pools associated with this cluster.
This field should not be set if &quot;node_config&quot; or &quot;initial_node_count&quot; are
specified.
* @property {string[]} locations The list of Google Compute Engine
[locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
should be located.
* @property {string[]} instanceGroupUrls [Output only] The resource URLs of [instance
groups](/compute/docs/instance-groups/) associated with this
cluster.
* @property {string} servicesIpv4Cidr [Output only] The IP address range of the Kubernetes services in
this cluster, in
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `1.2.3.4/29`). Service addresses are
typically put in the last `/16` from the container CIDR.
* @property {boolean} enableKubernetesAlpha Kubernetes alpha features are enabled on this cluster. This includes alpha
API groups (e.g. v1alpha1) and features that may not be production ready in
the kubernetes version of the master and nodes.
The cluster has no SLA for uptime and master/node upgrades are disabled.
Alpha enabled clusters are automatically deleted thirty days after
creation.
* @property {string} description An optional description of this cluster.
* @property {integer} currentNodeCount [Output only] The number of nodes currently in the cluster.
* @property {string} monitoringService The monitoring service the cluster should use to write metrics.
Currently available options:

* `monitoring.googleapis.com` - the Google Cloud Monitoring service.
* `none` - no metrics will be exported from the cluster.
* if left as an empty string, `monitoring.googleapis.com` will be used.
* @property {string} network The name of the Google Compute Engine
[network](/compute/docs/networks-and-firewalls#networks) to which the
cluster is connected. If left unspecified, the `default` network
will be used.
* @property {string} labelFingerprint The fingerprint of the set of labels for this cluster.
* @property {string} zone [Output only] The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
* @property {string} loggingService The logging service the cluster should use to write logs.
Currently available options:

* `logging.googleapis.com` - the Google Cloud Logging service.
* `none` - no logs will be exported from the cluster.
* if left as an empty string,`logging.googleapis.com` will be used.
* @property {integer} nodeIpv4CidrSize [Output only] The size of the address space on each node for hosting
containers. This is provisioned from within the `container_ipv4_cidr`
range.
* @property {string} expireTime [Output only] The time the cluster will be automatically
deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} statusMessage [Output only] Additional information about the current status of this
cluster, if available.
* @property {container(v1).MasterAuth} masterAuth The authentication information for accessing the master endpoint.
* @property {string} currentMasterVersion [Output only] The current software version of the master endpoint.
* @property {container(v1).NodeConfig} nodeConfig Parameters used in creating the cluster&#39;s nodes.
See `nodeConfig` for the description of its properties.
For requests, this field should only be used in lieu of a
&quot;node_pool&quot; object, since this configuration (along with the
&quot;initial_node_count&quot;) will be used to create a &quot;NodePool&quot; object with an
auto-generated name. Do not use this and a node_pool at the same time.
For responses, this field will be populated with the node configuration of
the first node pool.

If unspecified, the defaults are used.
* @property {container(v1).AddonsConfig} addonsConfig Configurations for the various addons available to run in the cluster.
*/
/**
 * @typedef CreateNodePoolRequest
 * @memberOf! container(v1)
 * @type object
 * @property {container(v1).NodePool} nodePool The node pool to create.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! container(v1)
 * @type object
* @property {container(v1).Operation[]} operations A list of operations in the project in the specified zone.
* @property {string[]} missingZones If any zones are listed here, the list of operations returned
may be missing the operations from those zones.
*/
/**
 * @typedef ServerConfig
 * @memberOf! container(v1)
 * @type object
 * @property {string[]} validNodeVersions List of valid node upgrade target versions.
 * @property {string[]} validImageTypes List of valid image types.
 * @property {string[]} validMasterVersions List of valid master versions.
 * @property {string} defaultClusterVersion Version of Kubernetes the service deploys by default.
 * @property {string} defaultImageType Default image type.
 */
/**
 * @typedef MasterAuth
 * @memberOf! container(v1)
 * @type object
* @property {string} username The username to use for HTTP basic authentication to the master endpoint.
For clusters v1.6.0 and later, you can disable basic authentication by
providing an empty username.
* @property {string} clientKey [Output only] Base64-encoded private key used by clients to authenticate
to the cluster endpoint.
* @property {string} clusterCaCertificate [Output only] Base64-encoded public certificate that is the root of
trust for the cluster.
* @property {string} password The password to use for HTTP basic authentication to the master endpoint.
Because the master endpoint is open to the Internet, you should create a
strong password.  If a password is provided for cluster creation, username
must be non-empty.
* @property {string} clientCertificate [Output only] Base64-encoded public certificate used by clients to
authenticate to the cluster endpoint.
*/
/**
 * @typedef NodeConfig
 * @memberOf! container(v1)
 * @type object
* @property {string} imageType The image type to use for this node. Note that for a given image type,
the latest version of it will be used.
* @property {string[]} oauthScopes The set of Google API scopes to be made available on all of the
node VMs under the &quot;default&quot; service account.

The following scopes are recommended, but not required, and by default are
not included:

* `https://www.googleapis.com/auth/compute` is required for mounting
persistent storage on your nodes.
* `https://www.googleapis.com/auth/devstorage.read_only` is required for
communicating with **gcr.io**
(the [Google Container Registry](/container-registry/)).

If unspecified, no scopes are added, unless Cloud Logging or Cloud
Monitoring are enabled, in which case their required scopes will be added.
* @property {boolean} preemptible Whether the nodes are created as preemptible VM instances. See:
https://cloud.google.com/compute/docs/instances/preemptible for more
inforamtion about preemptible VM instances.
* @property {object} labels The map of Kubernetes labels (key/value pairs) to be applied to each node.
These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it&#39;s best to assume the behavior is undefined
and conflicts should be avoided.
For more information, including usage and the valid values, see:
http://kubernetes.io/v1.1/docs/user-guide/labels.html
* @property {integer} localSsdCount The number of local SSD disks to be attached to the node.

The limit for this value is dependant upon the maximum number of
disks available on a machine per zone. See:
https://cloud.google.com/compute/docs/disks/local-ssd#local_ssd_limits
for more information.
* @property {object} metadata The metadata key/value pairs assigned to instances in the cluster.

Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes
in length. These are reflected as part of a URL in the metadata server.
Additionally, to avoid ambiguity, keys must not conflict with any other
metadata keys for the project or be one of the four reserved keys:
&quot;instance-template&quot;, &quot;kube-env&quot;, &quot;startup-script&quot;, and &quot;user-data&quot;

Values are free-form strings, and only have meaning as interpreted by
the image running in the instance. The only restriction placed on them is
that each value&#39;s size must be less than or equal to 32 KB.

The total size of all keys and values must be less than 512 KB.
* @property {integer} diskSizeGb Size of the disk attached to each node, specified in GB.
The smallest allowed disk size is 10GB.

If unspecified, the default disk size is 100GB.
* @property {string[]} tags The list of instance tags applied to all nodes. Tags are used to identify
valid sources or targets for network firewalls and are specified by
the client during cluster or node pool creation. Each tag within the list
must comply with RFC1035.
* @property {string} serviceAccount The Google Cloud Platform Service Account to be used by the node VMs. If
no Service Account is specified, the &quot;default&quot; service account is used.
* @property {string} machineType The name of a Google Compute Engine [machine
type](/compute/docs/machine-types) (e.g.
`n1-standard-1`).

If unspecified, the default machine type is
`n1-standard-1`.
*/
/**
 * @typedef AutoUpgradeOptions
 * @memberOf! container(v1)
 * @type object
* @property {string} autoUpgradeStartTime [Output only] This field is set when upgrades are about to commence
with the approximate start time for the upgrades, in
[RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} description [Output only] This field is set when upgrades are about to commence
with the description of the upgrade.
*/
/**
 * @typedef ListClustersResponse
 * @memberOf! container(v1)
 * @type object
* @property {string[]} missingZones If any zones are listed here, the list of clusters returned
may be missing those zones.
* @property {container(v1).Cluster[]} clusters A list of clusters in the project in the specified zone, or
across all ones.
*/
/**
 * @typedef HttpLoadBalancing
 * @memberOf! container(v1)
 * @type object
* @property {boolean} disabled Whether the HTTP Load Balancing controller is enabled in the cluster.
When enabled, it runs a small pod in the cluster that manages the load
balancers.
*/
/**
 * @typedef SetMasterAuthRequest
 * @memberOf! container(v1)
 * @type object
 * @property {container(v1).MasterAuth} update A description of the update.
 * @property {string} action The exact form of action to be taken on the master auth
 */
/**
 * @typedef NodePoolAutoscaling
 * @memberOf! container(v1)
 * @type object
* @property {integer} maxNodeCount Maximum number of nodes in the NodePool. Must be &gt;= min_node_count. There
has to enough quota to scale up the cluster.
* @property {integer} minNodeCount Minimum number of nodes in the NodePool. Must be &gt;= 1 and &lt;=
max_node_count.
* @property {boolean} enabled Is autoscaling enabled for this node pool.
*/
export = Container;
