import React from 'react';
import SingleFileUploaderView from '../single-file-uploader-view/SingleFileUploaderView';
import ImageUploader from '../../client/components/ImageUploader.jsx';
import UploadedFile from '../uploaded-file/UploadedFile';
import PreviewWidget from '../../client/components/PreviewWidget';
import TableInfo from './TableInfo.json';
import Consts from '../../consts/Consts';
import './ImageUploaderView.scss';

export default class ImageUploaderVIew extends SingleFileUploaderView {

    // No need to change props.type because type "image" is the default;

    render() {
        let isSubmited = Object.keys(this.state.uploadedFiles).length !== 0;

        return (
            <div className="uploader-sample">
                <div className="image-uploader-sample">

                    <h1>Image Uploader</h1>
                    <h3>Supported file's formats: jpg, png, jpeg, gif, svg</h3>

                    <div className="uploader">
                        <ImageUploader
                            category="my-images"
                            name="imageSample"
                            title="my-image"
                            theme="basic-theme"
                            onChange={this.handleFileChange}
                            disabled={this.state.isUploaderDisabled}
                        />
                    </div>

                    <div className="usage">
                        <p>import ImageUploader from '/src/modules/fileshandler/client/components/ImageUploader.js</p>
                        <p>{`<ImageUploader
                            category="my-images"
                            name="imageSample"
                            title="my-image"
                            theme="basic-theme"
                            onChange={this.handleFileChange}
                            disabled={this.state.isUploaderDisabled}
                            checkImgMinSize={true} />`}</p>
                    </div>

                    <img className="sql-image" src={require('./images-sql.png')} />

                    <div className="description p-1">

                        {this.state.isTable && <div className="m-2 mt-4 props-details" dir='ltr'>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        {TableInfo.thead.map((col, i) => <th key={i} scope="col">{col}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableInfo.tbody.map((row, i) =>
                                        <tr key={i}>
                                            <td>{row.Property}</td>
                                            <td>{row.Type}</td>
                                            <td>{row.Description}</td>
                                            <td>{row.Default}</td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>}

                        <button onClick={this.toggleTable}>{!this.state.isTable ? "Show props details" : "Show less"}</button>
                    </div>

                    <h2>Style Themes</h2>
                    <p className="explanation">There are a few basic styles you can easly implement by adding props.</p>

                    <div className="image-input-samples">

                        <div className="image-input-sample">
                            <p>This is the default-theme style. No <em>theme</em> prop is required.<br />
                                <strong>This theme is deprecated and does not support all the props!</strong>
                            </p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample1"
                                title="my-image"
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>

                        <div className="image-input-sample">
                            <p>This is the basic-theme style. You can achieve it by adding <em>theme="basic-theme"</em> as a prop.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample2"
                                title="my-image"
                                theme="basic-theme"
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>

                        <div className="image-input-sample">
                            <p>This is the circle-theme style. You can achieve it by adding <em>theme="circle-theme"</em> as a prop.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample3"
                                title="my-image"
                                theme="circle-theme"
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>
                    </div>

                    <h2>Preview Widjet</h2>
                    <p className="explanation">
                        Below are two examples with the default previewWidget.<br />
                        You can achieve it by adding <em>previewWidget={"{<PreviewWidget/>}"}</em> as a prop.<br />
                        The previewWidget component can be controled with <em>enableEdit</em>, <em>enableDelete</em> and <em>crop</em> props which by default are unabled.<br />
                        (For more details on <em>crop</em> scroll down)<br/>
                        The previewWidget component can be imported from modules/fileshandler/client/componens/PreviewWidget.js<br />
                        The default previewWidget component can be easly replaced by costume previewWidget component which extends the original.</p>

                    <div className="image-input-samples">

                        <div className="image-input-sample">
                            <p>This is <em>previewWidget</em> with the <em>default-theme</em> [deprecated] style.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample4"
                                title="my-image"
                                previewWidget={<PreviewWidget />}
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>

                        <div className="image-input-sample">
                            <p>This is <em>previewWidget</em> with the <em>basic-theme</em> style.<br />
                                Only <em>enableEdit</em> is enabled.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample5"
                                title="my-image"
                                theme="basic-theme"
                                previewWidget={<PreviewWidget enableEdit={true} />}
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>

                        <div className="image-input-sample">
                            <p>This is <em>previewWidget</em> with the <em>circle-theme</em> style.<br />
                                <em>enableEdit</em> and <em>enableDelete</em> props are enabled.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample6"
                                title="my-image"
                                theme="circle-theme"
                                previewWidget={<PreviewWidget enableEdit={true} enableDelete={true} />}
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>
                    </div>

                    <h2>Default Src</h2>
                    <p className="explanation">
                        Below is an example of an uploader with the prop <em>defaultThumbnailImageSrc="../media/myImage.jpg"</em>.<br />
                        This image will replace the default upload thumbnail.</p>

                    <div className="image-input-samples">

                        <div className="image-input-sample">
                            <ImageUploader
                                category="my-images"
                                name="imageSample7"
                                title="my-image"
                                theme="basic-theme"
                                onChange={this.handleFileChange}
                                defaultThumbnailImageSrc={require('../media//myImage.jpg')}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>
                    </div>

                    <p className="explanation">
                        Below is an example of an uploader with the prop <em>defaultChosenFile="../media/{this.props.defaultChosenFileName}"</em>.<br />
                    </p>

                    <div className="image-input-samples">

                        <div className="image-input-sample">
                            <ImageUploader
                                category="my-images"
                                name="imageSample8"
                                title="my-image"
                                theme="basic-theme"
                                onChange={this.handleFileChange}
                                defaultChosenFile={require('../media//myImage.jpg')}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>
                    </div>

                    <h2>Error Popup</h2>
                    <p className="explanation">
                        Below are examples of uploaders with the prop <em>isErrorPopup = true</em>.<br />
                        In this case, when choosing a file which exceeds the size limitation as they defiend at src/consts/ModulesConfig.json<br />
                        (which can be generated by activating config-generator.sh script), instead of a preview of the file, with an error icon and a tooltip that describes the issue,<br />
                        there is a popup with a messege.<br />
                        To see the effect try to play with the values at ModulesConfig<br />
                        (for example change fileshandler.FILE_SIZE_RANGE_IN_KB.image.MAX_SIZE to 0 and upload a file)<br />
                        <br />
                        In any case of files rejection, a proper message will be sent at the eventObj which is sent to onChange functions.
                    </p>

                    <div className="image-input-samples">

                        <div className="image-input-sample">
                            <p>This has <em>basic-theme</em> and <em>isErrorPopup=true</em>.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample9"
                                title="my-image"
                                theme="basic-theme"
                                isErrorPopup={true}
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>

                        <div className="image-input-sample">
                            <p>This has <em>previewWidget</em> with <em>basic-theme</em> and <em>isErrorPopup=true</em>.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample10"
                                title="my-image"
                                theme="basic-theme"
                                previewWidget={<PreviewWidget enableEdit={true} />}
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                                isErrorPopup={true}
                            />
                        </div>

                        <div className="image-input-sample">
                            <p>This has <em>circle-theme</em> and <em>isErrorPopup=true</em>.</p>
                            <ImageUploader
                                category="my-images"
                                name="imageSample11"
                                title="my-image"
                                theme="circle-theme"
                                onChange={this.handleFileChange}
                                disabled={this.state.isUploaderDisabled}
                                isErrorPopup={true}
                            />
                        </div>
                    </div>

                    <h2>Multi Sizes</h2>
                    <p className="explanation">When <em>isMultiSizes</em> is true (like in this example), the chosen images is resized and uploaded in maximum 3 different versions: small, mediuim and large.<br />
                        The images are saved at public/imgs/[category]/[image_id].[s/m/l].[format]<br />
                        The original image is resized only to smaller versions, which means that in some cases the image will have only medium and small versions, and in others only small.<br />
                        When the image and it's versions are uploaded, only 1 new instance is created at Images model.<br />
                        At the res of GETing the image, there will be a <em>isMultiSizes</em> prop (in addition to the <em>path</em> prop).<br />
                        At <em>isMultiSizes</em> there is an array with all the existing pathes of the different versions of the spesific image.</p>

                    <div className="image-input-samples">

                        <div className="image-input-sample">
                            <ImageUploader
                                category="my-images"
                                name="imageSample12"
                                title="my-image"
                                theme="basic-theme"
                                onChange={this.handleFileChange}
                                isMultiSizes={true}
                                disabled={this.state.isUploaderDisabled}
                            />
                        </div>
                    </div>

                    <h2> Image cropper ✂️</h2>
                    <p className="explanation">The image cropper enables the user to cut his image before uploading it. It could be useful for cropping a profile image and much more.<br />
                        To use it simply add to the ImageUploader the prop <em>crop=true</em>.<br />
                    </p>

                    <h4 className="explanation">Additional features</h4>
                    <p className="explanation"> Change <em>crop=true</em> to <em>crop={"{}"}</em> and add keys according to what you want.</p>
                    <ul className="explanation">
                        <li><em>ellipse:true</em> - If you whant the crop to be in an oval shape</li>
                        <li><em>proportion:number {"<=1"}</em> - To define fixed proportions between height/weight</li>
                        <li><em>direction:"ltr"/"rtl"</em> - Should popup titles be from rtl or ltr</li>
                        <li><em>grid:true</em> - Adds grid lines to help user with proportion</li>
                        <li><em>texts:{"{}"}</em> - Override default texts, the obect has key(name of text) value (replaced text).<br />
                            The texts you can override are:</li>
                        <ul className="inner-list">
                            <li>popupTitle</li>
                            <li>close (the popup)</li>
                            <li>done</li>
                            <li>cropButtonName</li>
                        </ul>
                    </ul>

                    <p className="explanation">If you whant to use previewWidget add the crop object in previewWidget's props.<br />
                        <strong>And the real thing</strong></p>

                    <div className="uploader">
                        <p>Simple example</p>
                        <ImageUploader
                            category="my-images"
                            name="imageSample14"
                            title="my-image"
                            theme="basic-theme"
                            onChange={this.handleFileChange}
                            crop={{
                                grid: true,
                                texts: { cropButtonName: "crop ✂️" }
                            }}
                        />
                    </div>
                    
                    <div className="uploader">
                        <p>Using PreviewWidget</p>
                        <ImageUploader
                            category="my-images"
                            name="imageSample13"
                            title="my-image"
                            theme="circle-theme"
                            onChange={this.handleFileChange}
                            previewWidget={<PreviewWidget
                                enableEdit={true}
                                enableDelete={true}
                                crop={{
                                    ellipse: true,
                                    proportion: 1,
                                    grid: true,
                                    texts: {
                                        popupTitle: "custom popup title",
                                        cropButtonName: "crop ✂️",
                                        close: "this might be equal to \"rm -rf /*\"",
                                        done: "Taadaa"
                                    }
                                }}
                            />}
                        />
                    </div>

                    <p className="explanation">
                        <strong>Note:</strong> In this example the Submit button uploads all the chosen images to Images model<br />
                        (without saving a reference image_id in another model like in "Upload image to relative model (by creating a new game)" sample).</p>

                    {!isSubmited ?
                        <button onClick={this.upload} disabled={this.state.isSubmitDisabled}>Submit</button> :
                        <div className="uploaded-images">
                            {this.state.uploadedFiles.map((uploadedImage, i) =>
                                <div key={i}>
                                    <UploadedFile {...uploadedImage} type={Consts.FILE_TYPE_IMAGE} />
                                </div>)}
                        </div>}
                </div>
            </div >
        );
    }
}