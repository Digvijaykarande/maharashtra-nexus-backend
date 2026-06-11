import APIFeatures  from "../utils/APIFeatures.js";
import asyncHandler from "../middleware/asyncHandler.js"

export const getAll =
  (Model) =>
  asyncHandler(
    async (req, res) => {

      const total =
        await Model.countDocuments();

      const features =
        new APIFeatures(
          Model.find(),
          req.query
        )
          .filter()
          .search()
          .sort()
          .limitFields()
          .paginate();

      const data =
        await features.query;

      res.status(200).json({
        success: true,
        total,
        count: data.length,
        data,
      });
    }
  );

export const getOne = (Model) => async (req,res) => {
  try {
    const data = await Model.findById(
      req.params.id
    );

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createOne = (Model) => async (
  req,
  res
) => {
  try {
    const data = await Model.create(
      req.body
    );

    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateOne = (Model) => async (
  req,
  res
) => {
  try {
    const data =
      await Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

  export const updateBySlug =
  (Model) => async (req, res) => {
    try {
      const data =
        await Model.findOneAndUpdate(
          {
            slug: req.params.slug,
          },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );

      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Not Found",
        });
      }

      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

export const deleteBySlug =
  (Model) => async (req, res) => {
    try {
      const data =
        await Model.findOneAndDelete({
          slug: req.params.slug,
        });

      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Not Found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
export const deleteOne = (Model) => async (
  req,
  res
) => {
  try {
    await Model.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//getBySlug
export const getBySlug =
  (Model) => async (req, res) => {
    try {
      const data =
        await Model.findOne({
          slug: req.params.slug,
        });

      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Not Found",
        });
      }

      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };