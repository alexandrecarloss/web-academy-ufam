import {} from './helpersTypes.js';
export function listProfs(profs) {
    const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`).join('');
    return `<ul>${list}</ul>`;
}
export function listTechnologies(technologies) {
    const list = technologies.filter((t) => t.poweredByNodejs).map((t) => `<li>${t.name} - ${t.type}</li>`).join('');
    return `<ul>${list}</ul>`;
}
//# sourceMappingURL=helpers.js.map