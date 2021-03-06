---
id: version-2.3.0-cli_push
title: push
original_id: cli_push
---

<div class="cli-command"><h2 class="cli-title">push</h2><p class="cli-usage">Usage: <code>push --network &lt;network&gt; [options]</code></p><p>deploys your project to the specified &lt;network&gt;<br/></p><dl><dt><span>Options:</span></dt><dd><div><code>--skip-compile</code> skips contract compilation</div><div><code>-d, --deploy-dependencies</code> deploys dependencies to the network if there is no existing deployment</div><div><code>--reset</code> redeploys all contracts (not only the ones that changed)</div><div><code>-f, --force</code> ignores validation errors and deploys contracts</div><div><code>--deploy-proxy-admin</code> eagerly deploys the project&#x27;s proxy admin (if not deployed yet on the provided network)</div><div><code>--deploy-proxy-factory</code> eagerly deploys the project&#x27;s proxy factory (if not deployed yet on the provided network)</div><div><code>-n, --network &lt;network&gt;</code> network to be used</div><div><code>-f, --from &lt;from&gt;</code> specify transaction sender address</div><div><code>--timeout &lt;timeout&gt;</code> timeout in seconds for each blockchain transaction (defaults to 600s)</div><div><code>--no-interactive</code> force to run the command in non-interactive mode</div></dd></dl></div>
