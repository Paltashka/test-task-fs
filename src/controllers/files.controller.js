const fs = require('fs').promises;
const path = require('path');

const filesController = {
    createOne: async (req, res) => {
        const { filename, content } = req.body;
        try {
            const filesDir = path.join(process.cwd(), "files");

            fs.mkdir(filesDir, { recursive: true }).catch(console.error);

            await fs.writeFile(
                path.join(filesDir, `${filename}.json`),
                JSON.stringify(content)
            );
            res.status(201).send({ message: "File created" });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const filesDir = path.join(process.cwd(), "files");

            fs.mkdir(filesDir, { recursive: true }).catch(console.error);

            const files = await fs.readdir(filesDir);
            res.status(200).json(files);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    getOne: async (req, res) => {
        const  params = req.params;
        try {
            const filesDir = path.join(process.cwd(), "files");

            fs.mkdir(filesDir, { recursive: true }).catch(console.error);

            const fileBuffer = await fs.readFile(path.join(filesDir, `${params.filename}.json`));
            const fileContent = fileBuffer.toString();

            res.status(200).send(fileContent);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    updateOne: async(req, res) => {
        const { content } = req.body;
        const  params = req.params;

        const filesDir = path.join(process.cwd(), "files");

        fs.mkdir(filesDir, { recursive: true }).catch(console.error);

        try {
            await fs.writeFile(
                path.join(filesDir, `${params.filename}.json`),
                JSON.stringify(content)
            );
            res.status(200).send({ message: "File updated" });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    deleteOne: async(req, res) => {
        try {
            const filesDir = path.join(process.cwd(), "files");

            fs.mkdir(filesDir, { recursive: true }).catch(console.error);

            await fs.unlink(path.join(filesDir, `${req.params.filename}.json`));
            res.status(204).send({ message: "File deleted" });
        } catch (e) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = filesController;