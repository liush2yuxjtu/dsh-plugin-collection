import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const obj=JSON.parse(readFileSync(new URL('../index.json', import.meta.url)));
assert.equal(obj.format,1);
assert.ok(obj.title?.en && Array.isArray(obj.plugins) && obj.plugins.length>0);
const names = new Set();
for (const p of obj.plugins) {
  assert.ok(p.name && !names.has(p.name)); names.add(p.name);
  assert.match(p.repository.url,/^https:\/\/github\.com\//);
  assert.ok(p.title?.en && p.description?.en && p.versions.length);
  for(const v of p.versions){
    assert.match(v.version,/^\d+\.\d+\.\d+$/);
    assert.ok(Number.isInteger(v.publishTimestamp) && v.publishTimestamp>0);
    assert.equal(v.source.type,'git');
    assert.match(v.source.commit,/^[0-9a-f]{40}$/);
    assert.equal(v.source.url,p.repository.url);
    assert.ok(v.engines?.dsh);
  }
}
console.log(`PASS: ${names.size} pinned plugins, valid index metadata and Git sources`);
